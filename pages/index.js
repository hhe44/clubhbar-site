import Link from "next/link";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import TwitterTimeline from "../components/twitterTimeline";
import Footer from "../components/footer";
import styles from "../styles/home.module.scss";

export async function getStaticProps() {
  const res = await fetch(`${process.env.STRAPI_URL}/home`);
  const postData = await res.json();
  return {
    props: { postData }
  };
}

const Home = ({ postData }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className={styles.container}>
        <div className={styles.news}>
          <h3>LATEST NEWS</h3>
          <div className={styles.posts}>
            {postData.posts.map(({ id, title, blurb, cover }) => (
              <div key={`post_${id}`}>
                <Link href={`/posts/${id}`} passHref>
                  <div className={styles.postWrap}>
                    <img
                      alt={`${cover.formats.thumbnail.name}`}
                      src={`https://clubhbar-strapi.herokuapp.com${cover.formats.thumbnail.url}`}
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
