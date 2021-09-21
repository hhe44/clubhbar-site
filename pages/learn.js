import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import YtModal from "../components/ytModal";
import { Tweet } from "react-twitter-widgets";
import background from "../public/images/clubhbar-hashgraph-bgasd.svg";
import styles from "../styles/learn.module.scss";

export async function getStaticProps() {
  const res = await fetch(`${process.env.STRAPI_URL}/learn`);
  const learnData = await res.json();
  return {
    props: { learnData },
  };
}

const Learn = ({ learnData }) => {
  const { adoptionTweets, crashcourse, whyhbar } = learnData;

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
            <div className={styles.crashCourse}>
              <h1>HEDERA HASHGRAPH CRASH COURSE</h1>
              <div className={styles.vidWrap}>
                {crashcourse.map(({ id, youtubeUrl }) => (
                  <YtModal
                    key={`crashcourse_${id}`}
                    vidKey={youtubeUrl.split("=")[1]}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.bottomRow}>
            <div className={styles.adoption}>
              <h1>ADOPTION</h1>
              {adoptionTweets.map(({ id, tweetUrl }) => (
                <Tweet
                  key={`adoptiontweet_${id}`}
                  tweetId={tweetUrl.split("/").splice(-1)[0]}
                  options={{ theme: "dark" }}
                />
              ))}
            </div>
            <div className={styles.hbarShillPane}>
              <h1>WHY HBAR?</h1>
              <div className={styles.vidWrap}>
                {whyhbar.map(({ id, title, youtubeUrl }) => (
                  <div key={`whyhbar_${id}`}>
                    <h3>{title}</h3>
                    <YtModal vidKey={youtubeUrl.split("=")[1]} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Learn;
