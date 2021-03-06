import React, { useState, createRef } from "react";
import { Paragraph, TextLink } from "../components/Text";
import Filled from "../components/Filled";
import Grid from "../components/Grid";
import { PlayButton } from "../components/Buttons";
import videoThumbnail from "./assets/video-thumbnail.mp4";
import AutoplayVideo from "../components/AutoplayVideo";
import Speckled from "../components/Speckled";

const Video = ({ className }) => {
  const [showThumbnail, setShowThumbnail] = useState(true);
  const videoRef = createRef();
  return (
    <Grid className={className}>
      <Speckled className="col-10 p1 p6-md">
        <div className="aspect-ratio aspect-ratio--16x9">
          {showThumbnail && (
            <>
              <div className="aspect-ratio__object bg-black_20 inline-flex z101">
                <PlayButton
                  onClick={() => {
                    setShowThumbnail(false);
                    videoRef.current.play();
                  }}
                />
              </div>
              <AutoplayVideo
                className="aspect-ratio__object"
                src={videoThumbnail}
              />
            </>
          )}
          <iframe
            src="https://player.vimeo.com/video/405875318"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            className={`aspect-ratio__object ${showThumbnail ? "hide" : ""}`}
            ref={videoRef}
          />
        </div>
      </Speckled>
      <Filled className="col-10 col-8-md">
        <div className="hide block-md">
          <Paragraph kind="danny" className="pt4">
            This video was made by our (very handsome) buddy{" "}
            <TextLink
              target="_blank"
              kind="danny"
              bold
              href="https://elihorne.com"
            >
              Eli Horne
            </TextLink>
            , with tender editing and lots of love.
          </Paragraph>
        </div>
        <div className="hide-md text-center ">
          <Paragraph italic kind="reuben" className="pt4 px4">
            This video was made by our (very handsome) buddy{" "}
            <TextLink kind="reuben" bold href="https://elihorne.com">
              Eli Horne
            </TextLink>
            , with tender editing and lots of love.
          </Paragraph>
        </div>
      </Filled>
    </Grid>
  );
};

export default Video;
