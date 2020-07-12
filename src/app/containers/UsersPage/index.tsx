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
import { Lead } from '../HomePage/components/Lead';
import { withRouter } from 'react-router-dom';
import { CenteredLoading } from 'app/components/CenteredLoading';
import { ContentWrapper } from 'app/components/ContentWrapper';

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
  }, [props.match.params.id]);

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
        {/* <Title as="h2">{t(translations.wishlists.title())}</Title> */}
        {isLoading && <CenteredLoading />}
        <Wrapper>
          {wishlists.map(wish => (
            <Wish {...wish} />
          ))}
        </Wrapper>

        {!isLoading && !wishlists.length && (
          <Lead>{t(translations.userPage.noResults())}</Lead>
        )}
      </ContentWrapper>
    </>
  );
}

export default withRouter(UsersPage);

const Wrapper = styled.div`
  display: grid;
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;
