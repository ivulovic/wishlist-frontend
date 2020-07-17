import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { NavBarProps } from './types';
import { ReactComponent as LogoIcon } from './assets/logo.svg';
import { FiShoppingBag, FiSettings, FiPower, FiInfo } from 'react-icons/fi';

export function Nav(props: NavBarProps) {
  const { t } = useTranslation();
  const { isLoggedIn, isSuperUser } = props;
  return (
    <nav>
      {/* NOT LOGGED IN */}
      <header>
        <NavLink to="/">
          <LogoIcon className="logo-icon" />
        </NavLink>

        <div className="nav-routes">
          {!isLoggedIn && (
            <>
              <NavLink to="/stores">
                <FiShoppingBag /> {t(translations.navbar.stores())}
              </NavLink>

              <NavLink to="/sign-in">{t(translations.navbar.signIn())}</NavLink>
            </>
          )}

          {/* LOGGED IN */}

          {isLoggedIn && (
            <>
              <NavLink to="/stores">
                <FiShoppingBag size={24} /> {t(translations.navbar.stores())}
              </NavLink>

              {isSuperUser && (
                <>
                  <NavLink to="/administrator">
                    {t(translations.navbar.administrator())}
                  </NavLink>
                </>
              )}
              <NavLink to="/settings">
                <FiSettings size={24} /> {t(translations.navbar.settings())}
              </NavLink>
              <NavLink to="/sign-out" title="Sign Out">
                <FiPower size={24} /> {t(translations.navbar.signOut())}
              </NavLink>
            </>
          )}
        </div>
      </header>
      <div>
        <NavLink to="/help">
          <FiInfo size={24} /> {t(translations.navbar.help())}
        </NavLink>
      </div>
    </nav>
  );
}
