import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
        <ul className={styles['social-media']}></ul>
        <p className={styles.disclaimer}></p>
    </div>
  );
};

export default Footer;
