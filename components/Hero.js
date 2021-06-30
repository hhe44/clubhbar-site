import Image from "next/image";
import styles from "./Hero.module.scss";
import background from "../public/images/clubhbar-hashgraph-bg.svg";
import logo from "../public/images/clubhbar-logo.svg";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
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
          quality={100}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.topWrap}>
          <div className={styles.video}>
            <iframe
              src={`https://www.youtube.com/embed/JzFXZvTrEnI`}
              frameBorder="0"
            />
          </div>
          <div style={{ position: "relative", width: "38rem", height: "28rem" }}>
            <Image
              src={logo}
              layout="fill"
              objectFit="cover"
              alt="ClubHbar Logo"
            />
          </div>
        </div>
        <div className={styles.bottomWrap}>
          <h1>The Largest HBAR Community on the Net</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
