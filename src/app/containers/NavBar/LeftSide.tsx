import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { actions as globalActions } from 'app/providers/GlobalProvider/slice';

export function LeftSide() {
  const dispatch = useDispatch();
  const onOpenDrawer = () => dispatch(globalActions.openDrawer());
  return (
    <button className="icon-button" onClick={onOpenDrawer}>
      <FiMenu id="menu-open" size={24} />
    </button>
  );
}
