import React from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';

export function Nav() {
  const { t } = useTranslation();
  return (
    <nav>
      <NavLink to="/administrator/stores">
        {t(translations.administratorNav.stores())}
      </NavLink>

      <NavLink to="/administrator/users">
        {t(translations.administratorNav.users())}
      </NavLink>
    </nav>
  );
}
