import React from 'react';
import { Logo } from './Logo';
import { NavBarProps } from './types';
import { LeftSide } from './LeftSide';
import { RightSide } from './RightSide';

export function NavBar(props: NavBarProps): JSX.Element {
  return (
    <div className="nav-bar">
      <LeftSide />
      {/* {props.isLoggedIn ? <LeftSide onOpenDrawer={onOpenDrawer} /> : <div />} */}
      <Logo />

      {props.isLoggedIn ? <RightSide {...props} /> : <div />}
    </div>
  );
}
