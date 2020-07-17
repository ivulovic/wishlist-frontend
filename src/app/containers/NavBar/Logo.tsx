import React from 'react';
import { Link } from 'react-router-dom';
import { websiteName } from 'settings';

export function Logo() {
  return (
    <Link to="/" className="logo-font">
      {websiteName}
    </Link>
  );
}
