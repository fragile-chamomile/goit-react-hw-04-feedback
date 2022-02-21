import React from 'react';
import PropTypes from 'prop-types';
import { NotificationAlert } from './Notification.styled';

function Notification({ message }) {
  return <NotificationAlert>{message}</NotificationAlert>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
