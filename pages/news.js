import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Tweet } from "react-twitter-widgets";
import background from "../public/images/clubhbar-hashgraph-bgasd.svg";
import styles from "../styles/news.module.scss";

export async function getStaticProps() {
  const res = await fetch(`${process.env.STRAPI_URL}/news-page`);
  const newsData = await res.json();
  return {
    props: { newsData },
    revalidate: 60,
  };
}

const News = ({ newsData }) => {
  const { featured, articles, tweets } = newsData;

  return (
    <>
      <Navbar />
      <div className={styles.bgWrap}>
        <Image
          alt="hashgraph-bg"
          src={background}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          quality={50}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.topRow}>
            <div className={styles.featuredNews}>
              <h1>FEATURED</h1>
              <div>
                {featured.map(({ id, title, url, cover }) => (
                  <div key={`featured_${id}`}>
                    <a href={url} target="_blank">
                      <div className={styles.titleWrap}>
                        <h3>{title}</h3>
                      </div>
                      <img
                        alt={`${cover.formats.thumbnail.name}`}
                        src={`${cover.formats.small.url}`}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.bottomRow}>
            <div className={styles.articles}>
              <h1>ARTICLES</h1>
              <div>
                {articles.map(({ id, title, url, cover }) => (
                  <div key={`article_${id}`}>
                    <a href={url} target="_blank">
                      <div className={styles.titleWrap}>
                        <h3>{title}</h3>
                      </div>
                      <img
                        alt={`${cover.formats.thumbnail.name}`}
                        src={`${cover.formats.small.url}`}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.tweets}>
              <h1>TWEETS</h1>
              {tweets.map(({ id, tweetUrl }) => (
                <Tweet
                  key={`adoptiontweet_${id}`}
                  tweetId={tweetUrl.split("/").splice(-1)[0]}
                  options={{ theme: "dark" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default News;
