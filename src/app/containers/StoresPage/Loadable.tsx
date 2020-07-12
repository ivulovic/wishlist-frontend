/**
 * Asynchronously loads the component for HomePage
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { ContentWrapper } from 'app/components/ContentWrapper';
import { CenteredLoading } from 'app/components/CenteredLoading';

export const StoresPage = lazyLoad(
  () => import('./index'),
  module => module.StoresPage,
  {
    fallback: (
      <ContentWrapper>
        <CenteredLoading />
      </ContentWrapper>
    ),
  },
);
