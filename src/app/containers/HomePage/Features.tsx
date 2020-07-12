import React from 'react';
import styled from 'styled-components/macro';
import { Title } from 'app/containers/HomePage/components/Title';
import { Lead } from './components/Lead';
import { SubTitle } from 'app/containers/HomePage/components/SubTitle';
import { P } from './components/P';
import { ThemeSwitch } from 'app/containers/ThemeSwitch';
import { LanguageSwitch } from '../LanguageSwitch';
import { ReactComponent as StateIcon } from './assets/state.svg';
import { ReactComponent as CSSIcon } from './assets/css.svg';
import { ReactComponent as INTLIcon } from './assets/intl.svg';
import { ReactComponent as TSLogo } from './assets/ts.svg';
import { ReactComponent as RouteIcon } from './assets/route.svg';
import { ReactComponent as SEOIcon } from './assets/seo.svg';
import { ReactComponent as InstantFeedbackIcon } from './assets/instant-feedback.svg';
import { ReactComponent as ScaffoldingIcon } from './assets/scaffolding.svg';
import { ReactComponent as OfflineFirstIcon } from './assets/offline-first.svg';
import { ReactComponent as CodeAnalysisIcon } from './assets/code-analysis.svg';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { Link } from 'app/components/Link';

export function Features() {
  const { t } = useTranslation();

  return (
    <>
      {/* <Title as="h2">Features</Title>
      <Lead>
        Crafted for <strong>highly scalable</strong>,{' '}
        <strong>easily maintainable</strong> and{' '}
        <strong>highly performant</strong> React.js applications with a focus on{' '}
        <strong>best DX</strong> and <strong>best practices</strong>.
      </Lead> */}
      {/* <List>
        <Feature>
          <INTLIcon className="feature-icon" />
          <Content>
            <SubTitle>{t(translations.features.createTitle())}</SubTitle>
            <P>{t(translations.features.createFeature())}</P>
          </Content>
        </Feature>

        <Feature>
          <CodeAnalysisIcon className="feature-icon" />
          <Content>
            <SubTitle>{t(translations.features.accessTitle())}</SubTitle>
            <P>{t(translations.features.accessFeature())}</P>
          </Content>
        </Feature>
      </List> */}
    </>
  );
}

const Feature = styled.li`
  display: flex;
  margin: 6.25rem 0 6.25rem 2.25rem;

  .feature-icon {
    width: 6.25rem;
    height: 6.25rem;
    margin-right: 2.25rem;
    flex-shrink: 0;
  }
`;
const Content = styled.div`
  flex: 1;
`;

const List = styled.ul`
  padding: 0;
  margin: 6.25rem 0 0 0;
`;
