import Image from 'next/image'
import styles from "./Hero.module.scss";
import background from "../public/images/clubhbar-hashgraph-bg.svg"

const Hero = () => {
  return (
    <div>
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
      <p className={styles.bgText}>
        Image Component
        <br />
        as a Background
      </p>
    </div>
  );
};

export default Hero;
