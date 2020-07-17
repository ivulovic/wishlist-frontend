/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Router as BrowserRouter } from 'react-router-dom';

// import { GlobalStyle } from '../styles/global-styles';
import { useSelector } from 'react-redux';
import {
  makeSelectIsUserAuthenticated,
  makeSelectInitializedAuth,
  makeSelectIsSuperUser,
} from 'app/providers/AuthProvider/selectors';
import { NotFoundPage } from './containers/NotFoundPage/Loadable';
import { WishlistsPage } from './containers/WishlistsPage/Loadable';
import { AdministratorPage } from './containers/AdministratorPage/Loadable';
import { UsersPage } from './containers/UsersPage/Loadable';
import { StoresPage } from './containers/StoresPage/Loadable';

import LoginPage from './containers/AuthPage/LoginPage/Loadable';
import RegisterPage from './containers/AuthPage/RegisterPage/Loadable';
import { SettingsPage } from './containers/SettingsPage/Loadable';
import { LandingPage } from './containers/LandingPage/Loadable';
import LogoutPage from './containers/AuthPage/LogoutPage';

import PrivateRoute from './core/routing/components/PrivateRoute';
import OnlyPublicRoute from './core/routing/components/OnlyPublicRoute';
import PublicRoute from './core/routing/components/PublicRoute';

import { makeSelectIsDrawerOpen } from './providers/GlobalProvider/selectors';

import './style/index.css';
import Drawer from './containers/Drawer';
import NonAuthenticatedWrapper from './wrappers/NonAuthenticatedWrapper';
import AuthenticatedWrapper from './wrappers/AuthenticatedWrapper';
import { history } from 'utils/history';

export function App() {
  const isUserLoggedIn = useSelector(makeSelectIsUserAuthenticated);
  const isSuperUser = useSelector(makeSelectIsSuperUser);
  const isAuthInitialized = useSelector(makeSelectInitializedAuth);
  const isDrawerOpen = useSelector(makeSelectIsDrawerOpen);
  return (
    <BrowserRouter history={history}>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <div
        className={`website-layout-${
          isUserLoggedIn && isDrawerOpen ? 'split' : 'full'
        }`}
      >
        <div className={`drawer-content ${isDrawerOpen ? 'opened' : 'closed'}`}>
          <Drawer isLoggedIn={isUserLoggedIn} isSuperUser={isSuperUser} />
        </div>
        <div className="main-content">
          <Switch>
            {/* <Route exact path={process.env.PUBLIC_URL + '/'} component={WishlistsPage} /> */}

            {!isUserLoggedIn && (
              <OnlyPublicRoute
                exact
                path={process.env.PUBLIC_URL + '/'}
                component={LandingPage}
                isAuthenticated={isUserLoggedIn}
                isAuthReady={isAuthInitialized}
                layout={NonAuthenticatedWrapper}
              />
            )}
            <PrivateRoute
              exact
              path={process.env.PUBLIC_URL + '/'}
              component={WishlistsPage}
              isAuthenticated={isUserLoggedIn}
              isAuthReady={isAuthInitialized}
              layout={AuthenticatedWrapper}
            />
            {/* <Route
              path={process.env.PUBLIC_URL + '/landing'}
              component={LandingPage}
            /> */}
            <PublicRoute
              path={process.env.PUBLIC_URL + '/settings'}
              component={SettingsPage}
              isAuthenticated={isUserLoggedIn}
              isAuthReady={isAuthInitialized}
              layout={
                isUserLoggedIn ? AuthenticatedWrapper : NonAuthenticatedWrapper
              }
            />
            {/* <Route
              path={process.env.PUBLIC_URL + '/settings'}
              component={SettingsPage}
            /> */}
            {/* <Route
              path={process.env.PUBLIC_URL + '/users/:id'}
              component={UsersPage}
            /> */}
            <PublicRoute
              path={process.env.PUBLIC_URL + '/users/:id'}
              component={UsersPage}
              isAuthenticated={isUserLoggedIn}
              isAuthReady={isAuthInitialized}
              layout={
                isUserLoggedIn ? AuthenticatedWrapper : NonAuthenticatedWrapper
              }
            />
            {/* <Route
              path={process.env.PUBLIC_URL + '/stores'}
              component={StoresPage}
            /> */}
            <PublicRoute
              exact
              path={process.env.PUBLIC_URL + '/stores'}
              component={StoresPage}
              isAuthenticated={isUserLoggedIn}
              isAuthReady={isAuthInitialized}
              layout={
                isUserLoggedIn ? AuthenticatedWrapper : NonAuthenticatedWrapper
              }
            />
            {/* <PrivateRoute
            path={process.env.PUBLIC_URL + '/wishlists'}
            component={WishlistsPage}
            isAuthenticated={isUserLoggedIn}
            isAuthReady={isAuthInitialized}
            layout={({ children }) => <React.Fragment>{children}</React.Fragment>}
          /> */}

            <PrivateRoute
              path={process.env.PUBLIC_URL + '/administrator'}
              component={AdministratorPage}
              isAuthenticated={isUserLoggedIn}
              isAuthReady={isAuthInitialized}
              layout={AuthenticatedWrapper}
            />

            {/* <PrivateRoute
            exact
            path={process.env.PUBLIC_URL + '/administrator/stores'}
            component={StoresPage}
            isAuthenticated={isUserLoggedIn && isSuperUser}
            isAuthReady={isAuthInitialized}
            layout={({ children }) => <React.Fragment>{children}</React.Fragment>}
          />

          <PrivateRoute
            exact
            path={process.env.PUBLIC_URL + '/administrator/users'}
            component={UsersPage}
            isAuthenticated={isUserLoggedIn && isSuperUser}
            isAuthReady={isAuthInitialized}
            layout={({ children }) => <React.Fragment>{children}</React.Fragment>}
          /> */}

            <OnlyPublicRoute
              path="/sign-in"
              component={LoginPage}
              isAuthenticated={isUserLoggedIn}
              isAuthReady={isAuthInitialized}
              layout={NonAuthenticatedWrapper}
            />
            <OnlyPublicRoute
              path="/sign-up"
              component={RegisterPage}
              isAuthenticated={isUserLoggedIn}
              isAuthReady={isAuthInitialized}
              layout={NonAuthenticatedWrapper}
            />

            <PrivateRoute
              path="/sign-out"
              component={LogoutPage}
              isAuthenticated={isUserLoggedIn}
              isAuthReady={isAuthInitialized}
              layout={NonAuthenticatedWrapper}
            />
            <PublicRoute
              component={NotFoundPage}
              isAuthenticated={isUserLoggedIn}
              isAuthReady={isAuthInitialized}
              layout={
                isUserLoggedIn ? AuthenticatedWrapper : NonAuthenticatedWrapper
              }
            />
          </Switch>
        </div>
      </div>

      {/* <GlobalStyle /> */}
    </BrowserRouter>
  );
}
