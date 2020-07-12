import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { ContentWrapper } from 'app/components/ContentWrapper';
import { CenteredLoading } from 'app/components/CenteredLoading';

const LoginPage = lazyLoad(
  () => import('./index'),
  module => module.LoginPage,
  {
    fallback: (
      <ContentWrapper>
        <CenteredLoading />
      </ContentWrapper>
    ),
  },
);

export default LoginPage;
