/**
 * Asynchronously loads the component for HomePage
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { ContentWrapper } from 'app/components/ContentWrapper';
import { CenteredLoading } from 'app/components/CenteredLoading';

const RegisterPage = lazyLoad(
  () => import('./index'),
  module => module.RegisterPage,
  {
    fallback: (
      <ContentWrapper>
        <CenteredLoading />
      </ContentWrapper>
    ),
  },
);

export default RegisterPage;
