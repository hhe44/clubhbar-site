import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import background from "../public/images/clubhbar-hashgraph-bgasd.svg";
import styles from "../styles/community.module.scss";

const Community = () => {
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
            <div className={styles.memes}>
              <h3>MEMES</h3>
            </div>
          </div>
          <div className={styles.bottomRow}>
            <div className={styles.leaderboard}>
              <h3>LEADERBOARD</h3>
            </div>
            <div className={styles.games}>
              <h3>GAMES</h3>
            </div>
            <div className={styles.link}>
              <h3>LINKS</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Community;
