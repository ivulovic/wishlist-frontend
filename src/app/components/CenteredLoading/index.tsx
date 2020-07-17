/**
 * Asynchronously loads the component for HomePage
 */

import * as React from 'react';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const CenteredLoading = props => (
  <div className="text-center" style={props.style}>
    <LoadingIndicator />
  </div>
);
