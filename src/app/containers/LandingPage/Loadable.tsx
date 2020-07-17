/**
 * Asynchronously loads the component for NotFoundPage
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { CenteredLoading } from 'app/components/CenteredLoading';

export const LandingPage = lazyLoad(
  () => import('./index'),
  module => module.LandingPage,
  {
    fallback: <CenteredLoading />,
  },
);
