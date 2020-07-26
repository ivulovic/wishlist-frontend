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

import './style/style.scss';
import NonAuthenticatedWrapper from './wrappers/NonAuthenticatedWrapper';
import AuthenticatedWrapper from './wrappers/AuthenticatedWrapper';
import { history } from 'utils/history';
import { NavLink } from 'react-router-dom';
import { websiteName, websiteMetaDescription, websiteLogoText } from 'settings';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Modal from '@material-ui/core/Modal';
import { InputAdornment, Hidden } from '@material-ui/core';
import {
  RiSettings2Line,
  RiLoginBoxLine,
  RiUserAddLine,
  RiStore2Line,
  RiSearchLine,
  RiAdminLine,
  RiHome3Line,
} from 'react-icons/ri';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MaterialUIOverride } from './style/material-ui';
import ProfilePage from './containers/ProfilePage';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});

export function App() {
  const isUserLoggedIn = useSelector(makeSelectIsUserAuthenticated);
  const isSuperUser = useSelector(makeSelectIsSuperUser);
  const isAuthInitialized = useSelector(makeSelectInitializedAuth);
  const [modal, setModal] = React.useState('');

  const tabRoutes = {
    0: '/',
    1: '/stores',
    // 2: isSuperUser ? '/administrator' : '/profile',
  };

  const handleModalClose = () => {
    setModal('');
  };

  React.useEffect(() => {
    if (isUserLoggedIn) {
      handleModalClose();
    }
  }, [isUserLoggedIn]);
  const classes = useStyles();
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    history.push(tabRoutes[newValue]);
  };
  const DrawerList = () => {
    return (
      <>
        {isSuperUser && (
          <ListItem
            button
            disableRipple
            component={NavLink}
            to="/administrator"
          >
            <ListItemIcon>
              <IconButton>
                <RiAdminLine size={22} />
              </IconButton>
            </ListItemIcon>
            {/* <ListItemText primary={t(translations.navbar.stores())} /> */}
          </ListItem>
        )}
        <ListItem button disableRipple component={NavLink} to="/stores">
          <ListItemIcon>
            <IconButton>
              <RiStore2Line size={22} />
            </IconButton>
          </ListItemIcon>
          {/* <ListItemText primary={t(translations.navbar.stores())} /> */}
        </ListItem>
      </>
    );
  };
  const ModalBody = ({ children }) => {
    return (
      <Grid container className="modal-container">
        <Grid item xs={10} sm={8} md={3} className="modal-content">
          {children}
        </Grid>
      </Grid>
    );
  };
  return (
    <BrowserRouter history={history}>
      <Helmet titleTemplate={`%s - ${websiteName}`} defaultTitle={websiteName}>
        <meta name="description" content={websiteMetaDescription} />
      </Helmet>
      <Modal
        open={Boolean(modal.length)}
        onClose={handleModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="modal"
      >
        <ModalBody>
          {modal === 'login' && <LoginPage />}
          {modal === 'register' && <RegisterPage />}
        </ModalBody>
      </Modal>
      <Grid container spacing={3}>
        <Grid item xs={12} className="header-grid-wrapper">
          <AppBar position="static">
            <Toolbar className="space-between">
              <div className="flex-row">
                <NavLink to="/" className="no-decoration">
                  <Typography variant="h6" noWrap className="logo">
                    {websiteLogoText}
                  </Typography>
                </NavLink>
              </div>
              <div className="flex-row search-wrapper">
                <InputBase
                  placeholder="Search for your friends…"
                  className="search-input"
                  onKeyDown={(e: any): void => {
                    if (e.key === 'Enter') {
                      const { value } = e.target;
                      if (value && value.trim()) {
                        history.push(`/users/${value.trim()}`);
                      }
                    }
                  }}
                  startAdornment={
                    <InputAdornment position="start">
                      <RiSearchLine size={20} />
                    </InputAdornment>
                  }
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <div>
                {!isUserLoggedIn && (
                  <List className="flex-row header-nav-list">
                    <ListItem
                      button
                      disableRipple
                      onClick={() => setModal('login')}
                    >
                      <ListItemIcon>
                        <IconButton>
                          <RiLoginBoxLine size={22} />
                        </IconButton>
                      </ListItemIcon>
                      {/* <ListItemText primary={t(translations.navbar.signIn())} /> */}
                    </ListItem>
                    <ListItem
                      button
                      disableRipple
                      onClick={() => setModal('register')}
                    >
                      <ListItemIcon>
                        <IconButton>
                          <RiUserAddLine size={22} />
                        </IconButton>
                      </ListItemIcon>
                      {/* <ListItemText primary={t(translations.navbar.signUp())} /> */}
                    </ListItem>
                  </List>
                )}
                <div className="flex-row">
                  {isUserLoggedIn && (
                    <List className="flex-row header-nav-list header-logged-in">
                      <DrawerList />
                    </List>
                  )}
                  {isUserLoggedIn && (
                    <List className="flex-row header-nav-list ">
                      <ListItem
                        button
                        disableRipple
                        component={NavLink}
                        to="/settings"
                      >
                        <ListItemIcon>
                          <IconButton>
                            <RiSettings2Line size={22} />
                          </IconButton>
                        </ListItemIcon>
                        {/* <ListItemText primary={t(translations.navbar.settings())} /> */}
                      </ListItem>
                    </List>
                  )}
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12} sm={12} className="website-grid-wrapper">
          <Switch>
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
            <PrivateRoute
              path={process.env.PUBLIC_URL + '/settings'}
              component={SettingsPage}
              isAuthenticated={isUserLoggedIn}
              isAuthReady={isAuthInitialized}
              layout={
                isUserLoggedIn ? AuthenticatedWrapper : NonAuthenticatedWrapper
              }
            />
            <PublicRoute
              path={process.env.PUBLIC_URL + '/users/:id'}
              component={UsersPage}
              isAuthenticated={isUserLoggedIn}
              isAuthReady={isAuthInitialized}
              layout={
                isUserLoggedIn ? AuthenticatedWrapper : NonAuthenticatedWrapper
              }
            />
            <PrivateRoute
              exact
              path={process.env.PUBLIC_URL + '/stores'}
              component={StoresPage}
              isAuthenticated={isUserLoggedIn}
              isAuthReady={isAuthInitialized}
              layout={
                isUserLoggedIn ? AuthenticatedWrapper : NonAuthenticatedWrapper
              }
            />
            <PrivateRoute
              path={process.env.PUBLIC_URL + '/administrator'}
              component={AdministratorPage}
              isAuthenticated={isUserLoggedIn}
              isAuthReady={isAuthInitialized}
              layout={AuthenticatedWrapper}
            />
            <PrivateRoute
              path="/sign-out"
              component={LogoutPage}
              isAuthenticated={isUserLoggedIn}
              isAuthReady={isAuthInitialized}
              layout={NonAuthenticatedWrapper}
            />
            <PrivateRoute
              path="/profile"
              component={ProfilePage}
              isAuthenticated={isUserLoggedIn}
              isAuthReady={isAuthInitialized}
              layout={AuthenticatedWrapper}
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
        </Grid>
        {!isUserLoggedIn && (
          <Grid item xs={12} className="footer-grid-wrapper">
            <Paper className="footer-wrapper text-center">
              <small>
                {websiteName}
                <span> &reg; </span>
                {new Date().getFullYear()}
              </small>
              <br />
              <small>
                <br />
                All product names, logos, and brands are property of their
                respective owners. <br />
                <br />
                All company, product and service names used in this website are
                for identification purposes only. Use of these names, logos, and
                brands does not imply endorsement.
              </small>
            </Paper>
          </Grid>
        )}
      </Grid>
      {isUserLoggedIn && (
        <Hidden smUp>
          <div style={{ marginTop: '45px' }}></div>
          <Grid item xs={6}>
            <div style={{ position: 'fixed', bottom: '0', width: '100%' }}>
              <Paper square>
                <Tabs
                  centered
                  value={activeTab}
                  onChange={handleTabChange}
                  indicatorColor="secondary"
                  textColor="secondary"
                  variant="fullWidth"
                  aria-label="icon label tabs example"
                >
                  <Tab icon={<RiHome3Line size={20} />} aria-label="Home" />
                  <Tab icon={<RiStore2Line size={20} />} aria-label="Store" />
                  {/* <Tab
                        icon={<RiUser3Line size={20} />}
                        aria-label="Profile"
                      /> */}
                </Tabs>
              </Paper>
            </div>
          </Grid>
        </Hidden>
      )}
      <MaterialUIOverride />
    </BrowserRouter>
  );
}
