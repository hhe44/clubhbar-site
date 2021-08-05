import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import YtModal from "../components/ytModal";
import { Tweet } from 'react-twitter-widgets'
import background from "../public/images/clubhbar-hashgraph-bgasd.svg";
import styles from "../styles/learn.module.scss";

// Code Optimization: Write for loop for vidlists later
// Should loop through an array of youtube video keys to
// create div element that wraps around h3 & ytModal

const Learn = () => {
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
                <YtModal vidKey={`ySXQfobVoc4`} />
                <YtModal vidKey={`4pLFwl72Ku0`} />
                <YtModal vidKey={`AEXfaMyZz5g`} />
              </div>
            </div>
          </div>
          <div className={styles.bottomRow}>
            <div className={styles.adoption}>
              <h1>ADOPTION</h1>
              <Tweet tweetId="1401996757479956497" options={{ theme: "dark" }}/>
              <Tweet tweetId="1402958509206089730" options={{ theme: "dark" }}/>
            </div>
            <div className={styles.hbarShillPane}>
              <h1>WHY HBAR?</h1>
              <div className={styles.vidWrap}>
                <div>
                  <h3>GOVERNANCE</h3>
                  <YtModal vidKey={`PulEjfEkWL0`} />
                </div>
                <div>
                  <h3>SPEED</h3>
                  <YtModal vidKey={`m70eiIc6J3M`} />
                </div>
                <div>
                  <h3>DECENTRALIZATION</h3>
                  <YtModal vidKey={`QTNNYeSks-s`} />
                </div>
                <div>
                  <h3>SECURITY</h3>
                  <YtModal vidKey={`pcToFASnyrc`} />
                </div>
                <div>
                  <h3>STABILITY</h3>
                  <YtModal vidKey={`mYrTBxfanPU`} />
                </div>
              </div>
              <div>
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
