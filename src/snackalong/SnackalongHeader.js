import React from "react";
import Grid from "../components/Grid";
import SiteLogo from "../components/SiteLogo";
import styles from "../utils/css";
import ArchiveCard from "../components/archive-card/ArchiveCard";

export const SnackalongHeader = () => {
  return (
    <Grid className="h85vh-md relative">
      <div className="col-2 col-1-sm relative z1 flex">
        <SiteLogo className="w100p px2-lg" />
      </div>

      <div className="w101p absolute t0 h50vh fade-white-transparent" />
      <div
        className={styles(
          "col-10 pt20vw z1 relative mb10 self-center",
          "col-8-sm col-offset-1-sm",
          "col-6-md col-offset-2-md mb0-md mx8-md pt0-md"
        )}
      >
        <ArchiveCard
          project="Snackalong: Ocean's Eleven"
          location="Brooklyn, NY"
          medium="Event"
          date="2018&#8209;06&#8209;30"
          budget="n/a"
          tactics={[
            "Design",
            "Branding",
            "Illustration",
            "Video",
            "Copy writing",
            "Composition",
            "Emceeing",
            "Cooking",
            "Sleuthing",
          ]}
        />
      </div>
    </Grid>
  );
};
