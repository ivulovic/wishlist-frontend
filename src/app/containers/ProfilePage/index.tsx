import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import {
  makeSelectUserEmail,
  makeSelectUserUsername,
} from 'app/providers/AuthProvider/selectors';

export default function ProfilePage() {
  const userEmail = useSelector(makeSelectUserEmail);
  const userUsername = useSelector(makeSelectUserUsername) || ' ';
  return (
    <div className="profile-avatar-card">
      <Avatar>{userUsername[0].toUpperCase()}</Avatar>
      <Typography className="profile-avatar-username" component="h2">
        {userUsername}
      </Typography>
      <Typography className="profile-avatar-email" component="h3">
        {userEmail}
      </Typography>
    </div>
  );
}
