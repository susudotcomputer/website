import React from "react";
import Grid from "../components/Grid";
import { Heading, Paragraph, Ul, Li, Span, TextLink } from "../components/Text";
import Filled from "../components/Filled";

export const Things = () => {
  return (
    <Grid className="py10 py30-md">
      <Filled className="col-10 col-8-sm col-offset-1-sm col-5-md col-offset-0-md mb10 mb0-md">
        <Heading className="mb3" kind="bigfreedia">
          🌐 SuSuniverse
        </Heading>
        <Paragraph className="mb3" kind="danny">
          These are our people who make great things.
        </Paragraph>
        <Ul className="pl2 pl0-sm">
          <Li className="list-circle list-inside mb3" kind="danny">
            Our friend <Span kind="chromesparks">Natasha Fedorova</Span> does
            great illustration work for us sometimes but more importantly runs{" "}
            <TextLink href="https://drinkwithdog.com" kind="chromesparks">
              Drink With Dog
            </TextLink>
            — the best place to look for dog friendly breweries and bars in NYC.
            Barks and brews, what’s better?
          </Li>
          <Li className="list-circle list-inside mb3" kind="danny">
            Our friend <Span kind="chromesparks">Eli Horne</Span> put together
            an amazing documentary of Snackalong. Who told Eli he gets to be
            handsome and talented? Check out his{" "}
            <TextLink
              href="https://www.youtube.com/elihorne"
              kind="chromesparks"
            >
              Youtube channel
            </TextLink>
            .
          </Li>
          <Li className="list-circle list-inside" kind="danny">
            Our friend <Span kind="chromesparks">Keith Holjencin</Span> was a
            wonderful studiomate and a charmer all around. He destroyed Kilian’s
            music listening stats via our sonos and even though that is
            unforgivable,{" "}
            <TextLink href="https://holjencin.com" kind="chromesparks">
              check him out
            </TextLink>
            .
          </Li>
        </Ul>
      </Filled>
      <Filled className="col-10 col-8-sm col-offset-1-sm col-5-md col-offset-5-md">
        <Heading className="mb3" kind="bigfreedia">
          🎉 Good Time, Fun Times
        </Heading>
        <Paragraph className="mb3" kind="danny">
          We endorse these people/things/places/sounds/characters 10,000% and
          you should check them out.
        </Paragraph>
        <Ul className="pl2 pl0-sm">
          <Li className="list-circle list-inside mb3" kind="danny">
            <TextLink href="https://swelldive.nyc" kind="chromesparks">
              Swell Dive
            </TextLink>{" "}
            — Our favorite breakfast taco/dive bar in Brooklyn.
          </Li>
          <Li className="list-circle list-inside mb3" kind="danny">
            <TextLink
              href="https://www.youtube.com/watch?v=hs-Le-zH2DI"
              kind="chromesparks"
            >
              Bob Ducca
            </TextLink>{" "}
            — Laughing forever.
          </Li>
          <Li className="list-circle list-inside mb3" kind="danny">
            <TextLink
              href="https://www.youtube.com/watch?v=m-m7mBSw-5k"
              kind="chromesparks"
            >
              Fortin’ With Will
            </TextLink>{" "}
            — Laughing forever.
          </Li>
          <Li className="list-circle list-inside" kind="danny">
            <TextLink
              href="https://www.youtube.com/watch?v=Ng2zOFADe0s"
              kind="chromesparks"
            >
              Bon Appetit’s Cinematic Foodiverse
            </TextLink>{" "}
            — Learn and laugh forever.
          </Li>
          <Li className="list-circle list-inside mb3">
            <TextLink
              href="https://www.youtube.com/watch?v=UZPX9KQbwsg"
              kind="chromesparks"
            >
              Vulfpeck
            </TextLink>{" "}
            — Musical and emotional heroes.
          </Li>
          <Li className="list-circle list-inside">
            <TextLink
              href="https://www.caseyrubberstamps.com"
              kind="chromesparks"
            >
              Casey’s Stamps
            </TextLink>{" "}
            — Everyone needs a go-to stamp maker.{" "}
          </Li>
        </Ul>
      </Filled>
    </Grid>
  );
};
