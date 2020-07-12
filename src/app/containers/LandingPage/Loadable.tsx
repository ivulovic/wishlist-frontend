/**
 * Asynchronously loads the component for NotFoundPage
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const LandingPage = lazyLoad(
  () => import('./index'),
  module => module.LandingPage,
  {
    fallback: <LoadingIndicator />,
  },
);
