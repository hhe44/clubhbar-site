import React from "react";
import { Timeline } from "react-twitter-widgets";
import styles from "./twitterTimeline.module.scss";

const TwitterTimeline = ({ twtHandle, twtHeight }) => {
  return (
    <div className={styles.container}>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: twtHandle,
        }}
        options={{
          theme: "dark",
          height: twtHeight,
          chrome: "transparent, nofooter, noscrollbar, noheader",
          dnt: true,
        }}
      />
    </div>
  );
};

export default TwitterTimeline;
