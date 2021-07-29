import React, {
  FC,
  createContext,
  useEffect,
  useCallback,
  useMemo,
  useState,
} from "react";

interface Notification {
  id: string;
  title: string;
  detail: string;
  date: string | Date;
  isRead: boolean;
}

interface NotificationContextValues {
  initialized: boolean;
  notifications: Array<Notification>;
  numberUnread: number;
  isLogging: boolean;
  handleLogin: () => void;
}

export const NotificationContext = createContext<
  NotificationContextValues | undefined
>(undefined);

const NotificationProvider: FC = ({ children }) => {
  const [isLogging, setIsLogging] = useState<boolean>(false);
  const [initialized, setInitialized] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<Array<Notification>>([]);
  const [numberUnread, setNumberUnread] = useState<number>(0);

  (window as any).OneSignal = (window as any).OneSignal || [];
  const { OneSignal } = window as any;

  useEffect(() => {
    if (!!localStorage.getItem("TOKEN")) {
      setIsLogging(true);
    }
  }, []);

  const handleLogin = useCallback(() => {
    localStorage.setItem("TOKEN", "123456");
    setIsLogging(true);
  }, []);

  useEffect(() => {
    if (!initialized) {
      OneSignal.push(() => {
        if (OneSignal.init) {
          OneSignal.init({
            appId: "5edb4b65-17f7-4639-be62-8e4991c28382",
            safari_web_id:
              "web.onesignal.auto.44fa898b-ecac-43e4-a4f9-b7817452e5d5",
            allowLocalhostAsSecureOrigin: false,
            autoResubscribe: true,
          }).finally(() => {
            setInitialized(true);
          });

          OneSignal.showSlidedownPrompt();
        }
      });
      setInitialized(true);
    }
  }, [OneSignal, initialized]);

  const handleNotification = useCallback(
    (notification: {
      id: string;
      heading: string;
      content: string;
      icon: string;
      data?: {
        __isOneSignalWelcomeNotification: boolean;
      };
    }) => {
      if (
        notification &&
        !notification?.data?.__isOneSignalWelcomeNotification
      ) {
        console.log(notification);
        setNotifications((prev) => {
          if (!prev.find((p) => p.id === notification.id)) {
            return [
              {
                id: notification.id,
                title: notification.heading,
                detail: notification.content,
                isRead: false,
                date: new Date(),
              },
              ...prev,
            ];
          }
          return prev;
        });
        setNumberUnread((prev) => prev + 1);
      }
    },
    []
  );

  const registerDevice = useCallback((userId: string) => {
    // eslint-disable-next-line no-console
    console.log("userId: ", userId);
  }, []);

  useEffect(() => {
    if (isLogging && initialized) {
      OneSignal.push(() => {
        OneSignal.showNativePrompt();

        OneSignal.setSubscription(true);

        OneSignal.getUserId(registerDevice);

        OneSignal.on("subscriptionChange", (isSubscribed: boolean) => {
          if (isSubscribed) {
            OneSignal.getUserId(registerDevice);
          }
        });

        OneSignal.on("notificationDisplay", handleNotification);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogging, initialized, handleNotification, registerDevice]);

  const values: NotificationContextValues = useMemo(() => {
    return {
      initialized,
      notifications,
      numberUnread,
      isLogging,
      handleLogin,
    };
  }, [initialized, notifications, numberUnread, isLogging, handleLogin]);

  return (
    <NotificationContext.Provider value={values}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
