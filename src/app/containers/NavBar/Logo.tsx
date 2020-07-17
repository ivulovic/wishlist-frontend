import React from 'react';
import { Link } from 'react-router-dom';
import { websiteLogoText } from 'settings';

export function Logo() {
  return (
    <Link to="/" className="logo-font">
      {websiteLogoText}
    </Link>
  );
}
