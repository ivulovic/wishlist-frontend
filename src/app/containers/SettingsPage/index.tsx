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

export function SettingsPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{websiteMetaTitleSettingsPage}</title>
        <meta name="description" content={websiteMetaDescriptionSettingsPage} />
      </Helmet>
      <div>
        <h2>{t(translations.settingsPage.themeLabel())}</h2>
        <ThemeSwitch />
        <br />
        <h2>{t(translations.settingsPage.languageLabel())}</h2>
        <LanguageSwitch />
      </div>
    </>
  );
}
