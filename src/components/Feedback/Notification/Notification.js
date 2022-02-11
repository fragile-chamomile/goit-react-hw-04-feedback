import React from 'react';
import { NotificationAlert } from './Notification.styled';

function Notification({ message }) {
  return <NotificationAlert>{message}</NotificationAlert>;
}

export default Notification;
