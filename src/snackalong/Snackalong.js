import React from "react";
import GridLines from "../components/GridLines";
import ArchiveCard from "../components/archive-card/ArchiveCard";
import WhatIs from "./WhatIs";
import Tabs from "../components/Tabs";
import Branding from "./Branding";

const Tab = ({ title, children }) => {
  return children;
};

const Snackalong = () => {
  return (
    <>
      <GridLines className="h100vh relative">
        <div className="w101p absolute t0 h50vh fade-white-transparent" />
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
      <GridLines>
        <WhatIs />
        <Tabs className="mb40vh">
          <Tab title="Some of it">
            <div className="aspect-ratio aspect-ratio--16x9">
              <div className="aspect-ratio__object bg-black_10 inline-flex">
                <button className="circle h15 w15 fz20px p2 border border-black bg-transparent black m-auto">
                  Play
                </button>
              </div>
            </div>
          </Tab>
          <Tab title="All of it">
            <div className="aspect-ratio aspect-ratio--16x9">
              <div className="aspect-ratio__object bg-black_80 inline-flex">
                <button className="circle h15 w15 fz20px p2 border border-white bg-transparent white m-auto">
                  Play
                </button>
              </div>
            </div>
          </Tab>
        </Tabs>
        <Branding />
      </GridLines>
    </>
  );
};

export default Snackalong;
