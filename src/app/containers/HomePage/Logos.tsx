import React from 'react';
import styled from 'styled-components/macro';

// import { ReactComponent as CRALogo } from './assets/cra-logo.svg';
// import { ReactComponent as RPLogo } from './assets/rp-logo.svg';
// import { ReactComponent as PlusSign } from './assets/plus-sign.svg';
import { ReactComponent as LogoIcon } from 'app/containers/NavBar/assets/logo.svg';

export function Logos() {
  return (
    <Wrapper>
      <LogoIcon className="logo" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  .logo {
    width: 10rem;
    height: 10rem;
  }
`;
