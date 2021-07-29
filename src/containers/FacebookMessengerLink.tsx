import React, { FC, useState, useCallback } from "react";
import ReactMessengerCustomerChat from "react-messenger-customer-chat";

const FacebookMessengerLink: FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleFocusIframe = useCallback(() => {
    setShow(true);
  }, []);

  return (
    <div className="Facebook-messenger">
      <button onClick={handleFocusIframe}>Focus</button>
      <ReactMessengerCustomerChat
        pageId="771400903577002"
        appId="810978546253814"
        shouldShowDialog={show}
        onCustomerChatDialogShow={() => setShow(true)}
        onCustomerChatDialogHide={() => setShow(true)}
      />
    </div>
  );
};

export default FacebookMessengerLink;
