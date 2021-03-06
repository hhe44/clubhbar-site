import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.socialMedia}>
          <a href="https://discord.gg/club-hbar" target="_">
            <img src="/images/discord-icon.svg" alt="discord" />
          </a>
          <a href="https://twitter.com/HbarWhereTheyAt" target="_">
            <img src="/images/twitter-icon.svg" alt="twitter" />
          </a>
          <img
            src="/images/reddit-icon.svg"
            alt="reddit"
            title="Club HBAR Reddit - Coming soon!"
          />
        </div>
        <div className={styles.disclaimer}>
          <p>
            This is a community run site that is not affiliated with Hedera
            Hashgraph or Swirlds
          </p>
          <p>(C) 2021 All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
