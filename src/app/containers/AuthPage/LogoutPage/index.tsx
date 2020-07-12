import React from 'react';

import { useDispatch } from 'react-redux';
import { logoutUser } from 'app/providers/AuthProvider/actions';
import { actions as globalActions } from 'app/providers/GlobalProvider/slice';

export default function Logout() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(logoutUser());
    dispatch(globalActions.closeDrawer());
  }, []);
  return null;
}
