/**
 * Asynchronously loads the component for HomePage
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { CenteredLoading } from 'app/components/CenteredLoading';
import { ContentWrapper } from 'app/components/ContentWrapper';

export const SettingsPage = lazyLoad(
  () => import('./index'),
  module => module.SettingsPage,
  {
    fallback: (
      <ContentWrapper>
        <CenteredLoading />
      </ContentWrapper>
    ),
  },
);
