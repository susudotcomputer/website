import React from "react";
import Grid from "../components/Grid";
import Filled from "../components/Filled";
import { Span, Paragraph } from "../components/Text";
import nathanHeadshot from "./assets/headshot-nathan.jpg";
import kilianHeadshot from "./assets/headshot-kilian.jpg";

export const Bios = () => {
  return (
    <Grid className="pt20 pb10">
      <Filled className="col-10 col-5-sm col-5-lg col-offset-0-lg">
        <div className="px3 px0-md">
          <Span kind="bigfreedia" className="block mb3">
            Kilian McMahon (Su)
          </Span>
          <img className="lh0 mt-auto mb3" src={kilianHeadshot} />

          <Paragraph kind="danny" className="mb5">
            Kilian is from Dublin Ireland. He loves getting absorbed in the
            details, no matter how small. That could be the etymology of a word
            he heard in a song lyric, the perfect recreation of a sandwich from
            a restaurant that he loved but has since gone out of business or
            doing research to ensure the typeface in a historical project is
            period accurate. He is currently a Frontend Designer at Kickstarter
            and was previously at Tito and Úll.
          </Paragraph>
        </div>
      </Filled>

      <Filled className="col-10 col-5-sm col-5-lg">
        <div className="px3 px0-md">
          <Span kind="bigfreedia" className="block mb3">
            Nathan Maggio (Su)
          </Span>
          <img className="lh0 mb3" src={nathanHeadshot} />

          <Paragraph kind="danny" className="mb5">
            Nathan is from the Bay Area and won’t shut up about it. He likes to
            create traditions, then continue them forever. Here is a list of his
            favorite things: outer space, emoji, buddhism, long train rides,
            photography, and live music.
          </Paragraph>
          <Paragraph kind="danny" className="mb5">
            Previously he was the senior creative lead for the Elizabeth Warren
            campaign, a creative director at Blue State, the art director for
            Funny Or Die, and a waiter at Outback Steakhouse.
          </Paragraph>
        </div>
      </Filled>
    </Grid>
  );
};
