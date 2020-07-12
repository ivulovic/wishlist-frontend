import React from 'react';
import { FiUser } from 'react-icons/fi';
import { NavBarProps } from './types';

export function RightSide(props: NavBarProps) {
  return (
    <div className="nav-right">
      <button className="icon-button" onClick={console.log}>
        <FiUser size={24} />
      </button>
    </div>
  );
}
