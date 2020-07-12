import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ContentWrapper } from 'app/components/ContentWrapper';
import { ThemeSwitch } from 'app/containers/ThemeSwitch';
import { LanguageSwitch } from '../LanguageSwitch';
import { Lead } from 'app/components/Lead';
import { translations } from 'locales/i18n';
import { useTranslation } from 'react-i18next';

export function SettingsPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Settings Page</title>
        <meta name="description" content="Website Settings page" />
      </Helmet>
      <ContentWrapper>
        <Lead>{t(translations.settingsPage.themeLabel())}</Lead>
        <ThemeSwitch />
        <br />
        <Lead>{t(translations.settingsPage.languageLabel())}</Lead>
        <LanguageSwitch />
      </ContentWrapper>
    </>
  );
}
