import React from 'react';
import styled from 'styled-components/macro';
import { Logos } from './Logos';
import { Title } from 'app/containers/HomePage/components/Title';
import { Lead } from 'app/containers/HomePage/components/Lead';
import { translations } from 'locales/i18n';
import { useTranslation } from 'react-i18next';

export function Masthead() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Logos />
      <Title>{t(translations.homePage.title())}</Title>
      <Lead>{t(translations.homePage.subtitle())}</Lead>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
`;
