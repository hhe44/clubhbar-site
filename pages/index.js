import Link from "next/link";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import TwitterTimeline from "../components/twitterTimeline";
import Footer from "../components/footer";
import styles from "../styles/home.module.scss";

export async function getStaticProps() {
  const postsRes = await fetch(`${process.env.STRAPI_URL}/posts`);
  const postData = await postsRes.json();
  const homeRes = await fetch(`${process.env.STRAPI_URL}/home`);
  const homeData = await homeRes.json();
  return {
    props: { postData, homeData },
  };
}

const Home = ({ postData, homeData }) => {

  // Grab latest 3 posts to display on news section...
  const posts = postData.slice(-3).reverse();
  const { youtubeUrl } = homeData.welcomeVideo;
  // Split youtube video to obtain vidkey after equal symbol...
  const vidKey = youtubeUrl.split("=")[1];

  return (
    <>
      <Navbar />
      <Hero vidkey={vidKey} />
      <div className={styles.container}>
        <div className={styles.news}>
          <h3>LATEST NEWS</h3>
          <div className={styles.posts}>
            {posts.map(({ id, title, blurb, cover, slug }) => (
              <div key={`post_${id}`}>
                <Link href={`/posts/${slug}`} passHref>
                  <div className={styles.postWrap}>
                    <img
                      alt={`${cover.formats.thumbnail.name}`}
                      src={`${cover.formats.thumbnail.url}`}
                    />
                    <div>
                      <h3>{title}</h3>
                      <p>{blurb}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.twtWrap}>
          <h3>TWEETS</h3>
          <TwitterTimeline twtHandle="HbarWhereTheyAt" />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
