import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { CenteredLoading } from 'app/components/CenteredLoading';

const LoginPage = lazyLoad(
  () => import('./index'),
  module => module.LoginPage,
  {
    fallback: <CenteredLoading />,
  },
);

export default LoginPage;
