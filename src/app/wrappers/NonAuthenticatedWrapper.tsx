import React from 'react';
import { Header } from 'app/containers/LandingPage/components/Header';

export default function NonAuthenticatedWrapper({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
