import Image from "next/image";
import styles from "./hero.module.scss";
import background from "../public/images/clubhbar-hashgraph-bg-bw.svg";
import logo from "../public/images/clubhbar-logo.svg";
import YtModal from "../components/ytModal";

const Hero = ({ vidkey }) => {
  return (
    <div className={styles.container}>
      {/* 
        Next/Image Background Example below:
        https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/background.js
      */}
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
      <div className={styles.content}>
        <div className={styles.topWrap}>
          <div className={styles.video}>
            <YtModal vidKey={vidkey} />
          </div>
          <div className={styles.logoWrap}>
            <div className={styles.logo}>
              <Image
                alt="clubhbar-logo"
                src={logo}
                layout="fill"
                objectFit="cover"
                quality={50}
              />
            </div>
            <h1>Premiere Community for HBAR Content, News and Networking</h1>
          </div>
        </div>
        <div className={styles.bottomWrap}>
          <h1>Premiere Community for HBAR Content, News and Networking</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
