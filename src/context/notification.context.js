import { createContext, useState, useContext, useMemo } from 'react';
import { Notification } from '../components/Notification/notification';

const NotificationContext = createContext();

export const NotificationContextProvider = ({ children }) => {
  const [notification, setNotification] = useState('');
  const [isNotificationShown, setIsNotificationShown] = useState(false);
  const [hasError, setHasError] = useState(false);

  const hideNotification = () => {
    setIsNotificationShown(false);
  }

  const showNotification = (text) => {
    setNotification(text);
    setIsNotificationShown(true);
  };

  const value = useMemo(() => ({
    notification,
    setNotification,
    isNotificationShown,
    setIsNotificationShown,
    setHasError,
    showNotification,
    hideNotification
  }), [notification, isNotificationShown]);

  return (
    <NotificationContext.Provider value={value}>
      {children}
      {isNotificationShown ? (
        <Notification text={notification} hasError={hasError} />
      ) : null}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);

  if (context === undefined) {
    throw new ReferenceError('Use NotificationContext inside its provider.');
  }

  return context;
};