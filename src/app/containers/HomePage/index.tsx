import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Masthead } from './Masthead';
// import { Features } from './Features';
import { ContentWrapper } from 'app/components/ContentWrapper';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <ContentWrapper>
        <Masthead />
        {/* <Features /> */}
      </ContentWrapper>
    </>
  );
}
