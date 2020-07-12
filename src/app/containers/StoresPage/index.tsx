import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer, actions } from './slice';
import { storesSaga } from './saga';
import { selectStores, selectLoading } from './selectors';
import { ContentWrapper } from 'app/components/ContentWrapper';
import { StoreThumbnail } from './components/StoreThumbnail';
import { CenteredLoading } from 'app/components/CenteredLoading';

export function StoresPage(props) {
  const dispatch = useDispatch();
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: storesSaga });
  const stores = useSelector(selectStores);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(actions.loadStores());
  }, []);

  return (
    <>
      <Helmet>
        <title>Stores</title>
        <meta name="description" content="Stores page" />
      </Helmet>
      <ContentWrapper>
        {/* <Title>Stores</Title> */}
        {isLoading && <CenteredLoading />}
        <Wrapper>
          {stores.map(s => (
            <StoreThumbnail key={s.name} {...s} />
          ))}
        </Wrapper>
      </ContentWrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-column-gap: 25px;
  grid-row-gap: 25px;

  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;
