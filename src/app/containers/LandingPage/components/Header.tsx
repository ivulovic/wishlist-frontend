import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search } from './Search';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { LeftSide } from 'app/containers/NavBar/LeftSide';
import { websiteLogoText } from 'settings';
import '../index.css';

export function Header() {
  const { t } = useTranslation();
  return (
    <div className="header-wrapper">
      <div className="header-left">
        {/* <img src="/images/genie.jpg" /> */}
        <div className="logo-section">
          <LeftSide />
          <h1 className="logo">
            <NavLink exact to="/">
              {websiteLogoText}
            </NavLink>
          </h1>
        </div>
        <Search />
      </div>
      <div className="header-right">
        <ul className="header-nav">
          <li>
            <NavLink to="/stores">{t(translations.navbar.stores())}</NavLink>
          </li>
          <li>
            <NavLink to="/settings">
              {t(translations.navbar.settings())}
            </NavLink>
          </li>
          <li>
            <NavLink to="/help">{t(translations.navbar.help())}</NavLink>
          </li>
          <li>
            <NavLink to="/sign-in">{t(translations.navbar.signIn())}</NavLink>
          </li>
          <li>
            <NavLink to="/sign-up">{t(translations.navbar.signUp())}</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
