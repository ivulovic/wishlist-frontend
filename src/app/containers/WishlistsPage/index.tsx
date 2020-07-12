import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { sliceKey, reducer, actions } from './slice';
import { wishlistsSaga } from './saga';
import { selectWishlists, selectLoading } from './selectors';
import { Wish } from './components/Wish';
import { WishUrlForm } from './components/WishUrlForm';
import { ContentWrapper } from 'app/components/ContentWrapper';
import { CenteredLoading } from 'app/components/CenteredLoading';
import { Lead } from '../HomePage/components/Lead';

export function WishlistsPage() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [values, setValues] = useState({} as any);
  const onChange = e =>
    setValues({ ...values, [e.target.name]: e.target.value });

  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: wishlistsSaga });
  const wishlists = useSelector(selectWishlists);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(actions.loadWishlists());
  }, []);

  const onSubmitUrl = () => {
    if (!isLoading && values && values.url && values.url.trim()) {
      dispatch(actions.fetchProductUrl(values));
      setValues({});
    }
  };
  const onRemoveWish = id => dispatch(actions.removeWishlist(id));

  // const onCreateWish = () =>
  //   dispatch(actions.createWishlist({ ...tempWish, ...values }));
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
        {isLoading ? (
          <CenteredLoading style={{ height: '42px', marginBottom: '25px' }} />
        ) : (
          <WishUrlForm
            values={values}
            onChange={onChange}
            onSubmit={onSubmitUrl}
          />
        )}
        <Wrapper>
          {wishlists.map(wish => (
            <Wish
              key={wish.createdAt as number}
              onRemoveWish={onRemoveWish}
              {...wish}
            />
          ))}
        </Wrapper>

        {!isLoading && !wishlists.length && (
          <Lead>{t(translations.wishlists.noResults())}</Lead>
        )}
      </ContentWrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;
