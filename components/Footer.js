import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
    <div className={styles.container}>
      <div>
        <a href="https://discord.gg/XqVEP67Re9" target="_"><img src="/images/discord-icon.svg" alt="discord" /></a>
        <a href="https://twitter.com/HbarWhereTheyAt" target="_"><img src="/images/twitter-icon.svg" alt="twitter" /></a>
        <img src="/images/reddit-icon.svg" alt="reddit" title="Club HBAR Reddit - Coming soon!" />
      </div>
      <div>
        <p>
          This is a community run site that is not affiliated with Hedera
          Hashgraph or Swirlds <br/> (C) 2021 All Rights Reserved
        </p>
      </div>
    </div>
    </>
  );
};

export default Footer;
