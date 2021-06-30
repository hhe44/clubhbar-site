import Image from "next/image";
import styles from "./Hero.module.scss";
import background from "../public/images/clubhbar-hashgraph-bg.svg";

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
      <div className={styles.contentWrap}>
        <div>
        </div>
        <h1>The Largest HBAR Community on the Net</h1>
      </div>
    </div>
  );
};

export default Hero;
