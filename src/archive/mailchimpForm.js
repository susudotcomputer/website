import React from "react";
import { Heading, Paragraph, Label } from "../components/Text";
import Grid from "../components/Grid";

const MailchimpForm = () => {
  return (
    <div className="bg-archive-brown-900">
      <Grid className="py10 py20-md" lines={false}>
        <div className="col-10 col-4-sm archive-beige">
          <Heading className="mb3" kind="kishibashi">
            We Have News(usu)letter
          </Heading>
        </div>
        <div className="col-10 col-5-sm col-offset-5-sm archive-beige">
          <Paragraph kind="danny">
            We send a cute little note when we have something great to show you.
            Our guess is there will be like, 2 a year? Very easy commitment on
            your end.
          </Paragraph>
          <div className="">
            <form
              action="https://computer.us19.list-manage.com/subscribe/post?u=86db09be54bc7d0db5fe3a780&id=a5404fa787"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate susu-mailchimp"
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <div className="mc-field-group flex flex-column">
                  <label className="font-sans" htmlFor="mce-EMAIL">
                    Email Address{" "}
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                    placeholder="cool@person.biz"
                  />
                </div>
                <div className="mc-field-group flex flex-column">
                  <Label kind="vulfpeck" htmlFor="mce-FNAME">
                    First Name{" "}
                  </Label>
                  <input
                    type="text"
                    name="FNAME"
                    className="required"
                    id="mce-FNAME"
                    placeholder="Cool"
                  />
                </div>
                <div id="mce-responses" className="clear">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  />
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  />
                </div>{" "}
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_86db09be54bc7d0db5fe3a780_a5404fa787"
                    tabIndex={-1}
                    defaultValue
                  />
                </div>
                <button
                  type="submit"
                  defaultValue="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                >
                  Sign me up, my dude!
                </button>
              </div>
            </form>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default MailchimpForm;
