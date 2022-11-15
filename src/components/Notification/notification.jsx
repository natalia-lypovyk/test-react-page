import './notification.css';
import { CloseNotification } from '../../assets/svg';
import { useNotification } from '../../context/notification.context';
import { useEffect } from 'react';

export const Notification = ({ text = 'There might be text', hasError = false }) => {
  const { hideNotification } = useNotification();

  useEffect(() => {
    const timer = setTimeout(hideNotification, 5000);
    return () => clearTimeout(timer);
  });

  return (
    <div className={hasError ? 'notification notification__error' : 'notification'}>
      <p>{text}</p>

      <button
        type="button"
        onClick={hideNotification}
        className="notification__close-button"
      >
        <CloseNotification />
      </button>
    </div>
  );
};