import React, { FC } from "react";
import ReactMessengerCustomerChat from "react-messenger-customer-chat";

const FacebookMessengerLink: FC = () => {
  return (
    <div className="Facebook-messenger">
      <ReactMessengerCustomerChat
        pageId="771400903577002"
        appId="810978546253814"
      />
    </div>
  );
};

export default FacebookMessengerLink;
