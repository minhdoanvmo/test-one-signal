import React, { FC, useCallback } from "react";
import ReactMessengerCustomerChat from "react-messenger-customer-chat";

const FacebookMessengerLink: FC = () => {
  const handleFocusIframe = useCallback(() => {
    (window as any).FB.CustomerChat.showDialog();
  }, []);

  return (
    <div className="Facebook-messenger">
      <button onClick={handleFocusIframe}>Focus</button>
      <ReactMessengerCustomerChat
        pageId="771400903577002"
        appId="810978546253814"
      />
    </div>
  );
};

export default FacebookMessengerLink;
