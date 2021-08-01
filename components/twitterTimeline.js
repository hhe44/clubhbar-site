import React from "react";
import { Timeline } from "react-twitter-widgets";
import styles from "./twitterTimeline.module.scss";

const TwitterTimeline = ({ twtHandle }) => {
  return (
    <div className={styles.container}>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: twtHandle,
        }}
        options={{
          id: `profile:${twtHandle}`,
          theme: "dark",
          height: "100%",
          chrome: "transparent, nofooter, noscrollbar, noheader",
          dnt: true,
        }}
      />
    </div>
  );
};

export default TwitterTimeline;
