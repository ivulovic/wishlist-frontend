/**
 * Asynchronously loads the component for HomePage
 */

import * as React from 'react';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import styled from 'styled-components/macro';

const LoadingWrapper = styled.div`
  width: 100%;
  z-index: 3;
  background: ${p => p.theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CenteredLoading = props => (
  <LoadingWrapper style={props.style}>
    <LoadingIndicator />
  </LoadingWrapper>
);
