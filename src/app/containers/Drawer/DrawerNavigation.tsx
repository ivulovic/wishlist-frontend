import React from 'react';
import { NavLink } from 'react-router-dom';
import DrawerLogo from './DrawerLogo';

import {
  FiShoppingBag,
  FiUserCheck,
  FiSettings,
  FiPower,
  FiGift,
  FiFolder,
  FiUsers,
  FiStar,
  FiChevronRight,
  FiLogIn,
  FiHelpCircle,
  FiUserPlus,
} from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';

export default function DrawerNavigation({ isLoggedIn, isSuperUser }) {
  const { t } = useTranslation();

  return (
    <div className="drawer-navigation-wrapper">
      {!isLoggedIn && (
        <>
          <ul className="drawer-navigation">
            <DrawerLogo />

            <>
              <li>
                <NavLink to="/sign-in" title="Sign In" activeClassName="active">
                  <FiLogIn size={22} /> {t(translations.navbar.signIn())}
                </NavLink>
              </li>

              <li>
                <NavLink to="/sign-up" title="Sign Up" activeClassName="active">
                  <FiUserPlus size={22} /> {t(translations.navbar.signUp())}
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/stores" activeClassName="active">
                  <FiShoppingBag size={22} /> {t(translations.navbar.stores())}
                </NavLink>
              </li>
            </>
          </ul>
          <ul className="drawer-navigation">
            <li>
              <NavLink to="/settings" activeClassName="active">
                <FiSettings size={22} /> {t(translations.navbar.settings())}
              </NavLink>
            </li>
            <li>
              <NavLink to="/help" activeClassName="active">
                <FiHelpCircle size={22} /> {t(translations.navbar.help())}
              </NavLink>
            </li>
          </ul>
        </>
      )}

      {/* WHEN LOGGED */}

      {isLoggedIn && (
        <>
          <ul className="drawer-navigation">
            <DrawerLogo />
            <>
              <li>
                <NavLink exact to="/" activeClassName="active">
                  <FiGift size={22} /> {t(translations.navbar.wishlists())}
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/stores" activeClassName="active">
                  <FiShoppingBag size={22} /> {t(translations.navbar.stores())}
                </NavLink>
              </li>
              <ul className="drawer-navigation-indented">
                <li>
                  <FiChevronRight size={22} color="var(--border)" />
                  <NavLink to="/stores/favorites" activeClassName="active">
                    <FiStar size={22} />
                    {t(translations.navbar.favorites())}
                  </NavLink>
                </li>
                <li>
                  <FiChevronRight size={22} color="var(--border)" />
                  <NavLink to="/stores/categories" activeClassName="active">
                    <FiFolder size={22} />
                    {t(translations.navbar.categories())}
                  </NavLink>
                </li>
              </ul>
            </>
            {isSuperUser && (
              <>
                <li>
                  <NavLink exact to="/administrator" activeClassName="active">
                    <FiUserCheck size={22} />
                    {t(translations.navbar.administrator())}
                  </NavLink>
                </li>
                <ul className="drawer-navigation-indented">
                  <li>
                    <FiChevronRight size={22} color="var(--border)" />
                    <NavLink
                      to="/administrator/stores"
                      activeClassName="active"
                    >
                      <FiShoppingBag size={22} />
                      {t(translations.navbar.stores())}
                    </NavLink>
                  </li>
                  <li>
                    <FiChevronRight size={22} color="var(--border)" />
                    <NavLink to="/administrator/users" activeClassName="active">
                      <FiUsers size={22} />
                      {t(translations.navbar.users())}
                    </NavLink>
                  </li>
                </ul>
              </>
            )}
          </ul>
          <ul className="drawer-navigation">
            <li>
              <NavLink to="/settings" activeClassName="active">
                <FiSettings size={22} /> {t(translations.navbar.settings())}
              </NavLink>
            </li>

            <li>
              <NavLink to="/sign-out" title="Sign Out" activeClassName="active">
                <FiPower size={22} /> {t(translations.navbar.signOut())}
              </NavLink>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
