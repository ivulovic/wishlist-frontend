import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'app/providers/AuthProvider/actions';
import { actions as globalActions } from 'app/providers/GlobalProvider/slice';
import { makeSelectIsDrawerOpen } from 'app/providers/GlobalProvider/selectors';

export default function Logout() {
  const dispatch = useDispatch();
  const isDrawerOpen = useSelector(makeSelectIsDrawerOpen);
  React.useEffect(() => {
    dispatch(logoutUser());
    if (isDrawerOpen) {
      dispatch(globalActions.closeDrawer());
    }
  }, [dispatch, isDrawerOpen]);
  return null;
}
