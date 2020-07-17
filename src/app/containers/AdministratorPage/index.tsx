import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';

import { Switch, Route, Redirect } from 'react-router-dom';
import { StoresPage } from './StoresPage/Loadable';
import { UsersPage } from './UsersPage/Loadable';
import { makeSelectIsSuperUser } from 'app/providers/AuthProvider/selectors';
import { defaultRedirectRouteForPrivateRouter } from 'settings';

export function AdministratorPage() {
  const baseRoute = '/administrator';
  const isSuperUser = useSelector(makeSelectIsSuperUser);
  if (!isSuperUser) {
    return <Redirect to={defaultRedirectRouteForPrivateRouter} />;
  }
  return (
    <>
      <Helmet>
        <title>Administrator Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <Switch>
        <Route
          exact
          path={baseRoute}
          render={() => <Redirect to={`${baseRoute}/stores`} />}
        />
        <Route exact component={StoresPage} path={`${baseRoute}/stores`} />
        <Route exact component={UsersPage} path={`${baseRoute}/users`} />
      </Switch>
    </>
  );
}
