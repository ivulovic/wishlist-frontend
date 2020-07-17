import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer, actions } from './slice';
import { storesSaga } from './saga';
import { selectStores, selectLoading } from './selectors';
import { StoreThumbnail } from './components/StoreThumbnail';
import { CenteredLoading } from 'app/components/CenteredLoading';
import {
  websiteMetaDescriptionStoresPage,
  websiteMetaTitleStoresPage,
} from 'settings';

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
        <title>{websiteMetaTitleStoresPage}</title>
        <meta name="description" content={websiteMetaDescriptionStoresPage} />
      </Helmet>
      {isLoading && <CenteredLoading />}
      <Wrapper>
        {stores.map(s => (
          <StoreThumbnail key={s.name} {...s} />
        ))}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-column-gap: 25px;
  grid-row-gap: 25px;

  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;
