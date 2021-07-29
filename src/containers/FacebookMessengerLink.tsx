import React, { FC, useCallback } from "react";
import ReactMessengerCustomerChat from "react-messenger-customer-chat";

const FacebookMessengerLink: FC = () => {
  const handleFocusIframe = useCallback(() => {
    const element = document.getElementsByName("Messenger-customer-chat")[0];
    element?.focus();
  }, []);

  return (
    <div className="Facebook-messenger">
      <button onClick={handleFocusIframe}>Focus</button>
      <ReactMessengerCustomerChat
        pageId="771400903577002"
        appId="810978546253814"
        class="Messenger-customer-chat"
      />
    </div>
  );
};

export default FacebookMessengerLink;
