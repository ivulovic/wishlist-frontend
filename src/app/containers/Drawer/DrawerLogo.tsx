import React from 'react';
import { NavLink } from 'react-router-dom';
import { websiteLogoText } from 'settings';

export default function DrawerLogo() {
  return (
    <h1 className="logo">
      <NavLink to="/">{websiteLogoText}</NavLink>
    </h1>
  );
}
