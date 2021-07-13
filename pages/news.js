import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import background from "../public/images/clubhbar-hashgraph-bgasd.svg";
import styles from "../styles/news.module.scss";

const News = () => {
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
              <h3>FEATURED NEWS</h3>
            </div>
          </div>
          <div className={styles.bottomRow}>
            <div className={styles.announcements}>
              <h3>ANNOUNCEMENTS</h3>
            </div>
            <div className={styles.tweets}>
              <h3>TWEETS</h3>
            </div>
            <div className={styles.articles}>
              <h3>ARTICLES</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default News;
