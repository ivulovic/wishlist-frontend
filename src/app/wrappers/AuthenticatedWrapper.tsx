import React from 'react';
import { NavBar } from 'app/containers/NavBar';

export default function AuthenticatedWrapper({ children }) {
  return (
    <div>
      <NavBar isLoggedIn={true} isSuperUser={true} />
      {children}
    </div>
  );
}
