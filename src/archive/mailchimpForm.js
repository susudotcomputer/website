import React from 'react';
import styles from '../utils/css';

const MailchimpForm = () => {
  const inputStyles = styles(
    'rounded-medium bg-white p3 border border1px border-white w100p mb3'
  );
  return (
    <div id="mc_embed_signup">
      <form
        action="https://computer.us19.list-manage.com/subscribe/post?u=86db09be54bc7d0db5fe3a780&amp;id=a5404fa787"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <div className="mc-field-group">
            <input
              type="email"
              value=""
              name="EMAIL"
              id="mce-EMAIL"
              placeholder="Email address"
              className={inputStyles}
            />

            <input
              type="text"
              value=""
              name="FNAME"
              className={inputStyles}
              id="mce-FNAME"
              placeholder="First name"
            />
          </div>
          <div id="mce-responses" className="clear">
            <div className="response hide" id="mce-error-response" />
            <div className="response" id="mce-success-response hide" />
          </div>
          <div aria-hidden="true" className="absolute l-5000px">
            <input
              type="text"
              name="b_86db09be54bc7d0db5fe3a780_a5404fa787"
              tabIndex="-1"
              value=""
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              value="Get ‘em dope SuSu emails"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MailchimpForm;
