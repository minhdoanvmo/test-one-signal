import React, { FC, useState, useCallback } from "react";
import { v4 } from "uuid";
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
        key={v4()}
        pageId="771400903577002"
        appId="810978546253814"
        shouldShowDialog={show}
        onCustomerChatDialogShow={() => setShow(true)}
        onCustomerChatDialogHide={() => setShow(false)}
      />
    </div>
  );
};

export default FacebookMessengerLink;
