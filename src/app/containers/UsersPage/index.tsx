import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { sliceKey, reducer, actions } from './slice';
import { usersSaga } from './saga';
import { selectWishlists, selectLoading } from './selectors';
import { Wish } from '../WishlistsPage/components/Wish';
import { withRouter } from 'react-router-dom';
import { CenteredLoading } from 'app/components/CenteredLoading';
import { Typography } from '@material-ui/core';

function UsersPage(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: usersSaga });
  const wishlists = useSelector(selectWishlists);
  const isLoading = useSelector(selectLoading);

  useEffect((): any => {
    dispatch(actions.loadWishlists({ id: props.match.params.id }));
    return () => dispatch(actions.resetState());
  }, [dispatch, props.match.params.id]);

  return (
    <>
      <Helmet>
        <title>Users Page</title>
      </Helmet>
      {isLoading && <CenteredLoading />}
      <Wrapper>
        {wishlists.map(wish => (
          <Wish key={wish.createdAt as number} {...wish} />
        ))}
      </Wrapper>

      {!isLoading && !wishlists.length && (
        <Typography>{t(translations.userPage.noResults())}</Typography>
      )}
    </>
  );
}

export default withRouter(UsersPage);

const Wrapper = styled.div`
  display: grid;
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
