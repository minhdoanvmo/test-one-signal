import React, { FC, useState, useCallback } from "react";
import { v4 } from "uuid";
import ReactMessengerCustomerChat from "react-messenger-customer-chat";

const initial = v4();

const FacebookMessengerLink: FC = () => {
  const [key, setKey] = useState<string>(initial);

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
