import React from "react";

const MailchimpForm = () => {
  return (
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
            <label className="font-sans" htmlFor="mce-FNAME">
              First Name{" "}
            </label>
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
          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
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
  );
};

export default MailchimpForm;
