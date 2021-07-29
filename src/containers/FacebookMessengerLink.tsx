import React, { FC, useState, useCallback } from "react";
import { v4 } from "uuid";
import ReactMessengerCustomerChat from "react-messenger-customer-chat";

const initial = v4();

const FacebookMessengerLink: FC = () => {
  const [key, setKey] = useState<string>(initial);

  const handleFocusIframe = useCallback(() => {
    setKey(v4());
  }, []);

  return (
    <div className="Facebook-messenger">
      <button onClick={handleFocusIframe}>Focus</button>
      <ReactMessengerCustomerChat
        key={key}
        pageId="771400903577002"
        appId="810978546253814"
        shouldShowDialog={true}
      />
    </div>
  );
};

export default FacebookMessengerLink;
