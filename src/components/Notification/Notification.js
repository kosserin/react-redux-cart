import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Notification.module.css';

const Notification = () => {

  
  const notificationTitle = useSelector(state => state.ui.notification.title)
  const notificationStatus = useSelector(state => state.ui.notification.status);
  
  let classes = "notification ";

  if(notificationStatus === 'error') {
    classes += 'error';
  }

  if(notificationStatus === 'success') {
    classes += 'success';
  }

  if(notificationStatus === 'loading') {
    classes += 'loading';
  }

  console.log(classes)

  return (
    <div className={`${styles.notification} ${notificationStatus === 'success' && styles.success} ${notificationStatus === 'error' && styles.error} ${notificationStatus === 'loading' && styles.loading}`}>{notificationTitle}</div>
  )
}

export default Notification