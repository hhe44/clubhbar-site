import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import TwitterTimeline from "../components/twitterTimeline";
import YtModal from "../components/ytModal";
import Footer from "../components/footer";
import styles from "../styles/home.module.scss";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Home = ({ allPostsData }) => {
  return (
    <>
      <Navbar isHomePage={true} />
      <Hero />
      <div className={styles.container}>
        <div className={styles.posts}>
          <h3>LATEST NEWS</h3>
          {allPostsData.map(({ id, title, snippet }) => (
            <div key={`post_${id}`}>
              <Link href={`/posts/${id}`}>
                <div className={styles.postWrap}>
                    <img src={`/images/posts/${id}.png`} />
                    <div>
                      <h3>{title}</h3>
                      <p>{snippet}</p>
                    </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <TwitterTimeline twtHandle="HbarWhereTheyAt" twtHeight="calc(100vh - 10rem)"/>
      </div>
      <Footer />
    </>
  );
};
export default Home;
