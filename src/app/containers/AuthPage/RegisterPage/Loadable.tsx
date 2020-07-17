/**
 * Asynchronously loads the component for HomePage
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { CenteredLoading } from 'app/components/CenteredLoading';

const RegisterPage = lazyLoad(
  () => import('./index'),
  module => module.RegisterPage,
  {
    fallback: <CenteredLoading />,
  },
);

export default RegisterPage;
