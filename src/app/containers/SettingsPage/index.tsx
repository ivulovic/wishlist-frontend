import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ThemeSwitch } from 'app/containers/ThemeSwitch';
import { LanguageSwitch } from '../LanguageSwitch';
import { translations } from 'locales/i18n';
import { useTranslation } from 'react-i18next';
import {
  websiteMetaTitleSettingsPage,
  websiteMetaDescriptionSettingsPage,
} from 'settings';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { RiLogoutBoxLine } from 'react-icons/ri';

export function SettingsPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{websiteMetaTitleSettingsPage}</title>
        <meta name="description" content={websiteMetaDescriptionSettingsPage} />
      </Helmet>
      <div>
        <ThemeSwitch />
        <br />
        <LanguageSwitch />
        <br />
        <Button component={NavLink} to="/sign-out">
          <RiLogoutBoxLine size={22} />
          &nbsp; {t(translations.navbar.signOut())}
        </Button>
      </div>
    </>
  );
}
