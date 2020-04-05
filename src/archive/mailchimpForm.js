import React from "react";
import Mailchimp from "react-mailchimp-form";

const MailchimpForm = () => {
  return (
    <Mailchimp
      action="https://computer.us19.list-manage.com/subscribe/post?u=86db09be54bc7d0db5fe3a780&amp;id=a5404fa787"
      fields={[
        {
          name: "EMAIL",
          placeholder: "Email",
          type: "email",
          required: true,
        },
        {
          name: "FIRST_NAME",
          placeholder: "First name",
          type: "text",
          required: true,
        },
      ]}
      className="susu-mailchimp"
      messages={{
        button: "Get 'em dope SuSu emails",
      }}
    />
  );
};

export default MailchimpForm;
