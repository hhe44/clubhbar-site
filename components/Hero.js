import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.container}>
        <div>
            <div className={styles['yt-container']}></div>
            <div className={styles.logo}></div>
        </div>
        <div>
            <h1 className={styles.caption}></h1>
        </div>
    </div>
  );
};

export default Hero;
