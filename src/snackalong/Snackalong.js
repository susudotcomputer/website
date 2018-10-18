import React from "react";
import GridLines from "../components/GridLines";
import ArchiveCard from "../components/archive-card/ArchiveCard";

const Snackalong = () => {
  return (
    <GridLines className="h80vh">
      <ArchiveCard
        project="Snackalong:Ocean's Eleven"
        location="Brooklyn, NY"
        medium="Event"
        date="2018&#8209;06&#8209;30"
        budget="n/a"
        tactics={[
          "visualDesign",
          "webDevelopment",
          "cooking",
          "branding",
          "photography",
          "copyWriting",
          "video",
          "illustration",
          "print"
        ]}
      />
    </GridLines>
  );
};

export default Snackalong;
