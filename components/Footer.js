import styles from "./Footer.module.scss";
// import discordIcon from "../public/images/discord-icon.svg";
// import twitterIcon from "../public/images/twitter-icon.svg";
// import redditIcon from "../public/images/reddit-icon.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <>
    <div className={styles.container}>
      <div>
        <a href="https://discord.gg/jWmEVQeP" target="_"><img src="/images/discord-icon.svg" alt="discord" /></a>
        <a href="https://twitter.com/HbarWhereTheyAt" target="_"><img src="/images/twitter-icon.svg" alt="twitter" /></a>
        <img src="/images/reddit-icon.svg" alt="reddit" />
      </div>
      <div>
        <p className={styles.disclaimer}>
          This is a community run site that is not affiliated with Hedera
          Hashgraph or Swirlds <br/> (C) 2021 All Rights Reserved</p>
      </div>
    </div>
    </>
  );
};

export default Footer;
