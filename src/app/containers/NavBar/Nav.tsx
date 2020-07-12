import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { NavBarProps } from './types';
import styled from 'styled-components';
import { StyleConstants } from 'styles/StyleConstants';
import { ReactComponent as LogoIcon } from './assets/logo.svg';
import { FiShoppingBag, FiSettings, FiPower, FiInfo } from 'react-icons/fi';

export function Nav(props: NavBarProps) {
  const { t } = useTranslation();
  const { isLoggedIn, isSuperUser } = props;
  return (
    <nav>
      {/* NOT LOGGED IN */}
      <Wrapper>
        <Title>
          <NavLink to="/">
            <LogoIcon className="logo-icon" />
          </NavLink>
        </Title>

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
      </Wrapper>
      <div>
        <NavLink to="/help">
          <FiInfo size={24} /> {t(translations.navbar.help())}
        </NavLink>
      </div>
    </nav>
  );
}

const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background-color: ${p => p.theme.background};
  z-index: 2;

  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
    background-color: ${p =>
      p.theme.background.replace(
        /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
        'rgba$1,0.75)',
      )};
  }
`;

const Title = styled.div`
  font-size: 1.25rem;
  text-decoration: none;
  color: ${p => p.theme.text};
  font-weight: bolder;
  letter-spacing: 1px;

  display: flex;
  align-items: center;
  justify-content: center;
  .logo-icon {
    margin-right: 10px;
  }
`;
