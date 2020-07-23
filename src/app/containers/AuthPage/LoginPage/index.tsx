import React from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import { login } from 'app/providers/AuthProvider/actions';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import {
  websiteName,
  websiteMetaTitleLoginPage,
  websiteMetaDescriptionLoginPage,
} from 'settings';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { IconButton, Button } from '@material-ui/core';
import { Logo } from 'app/containers/NavBar/Logo';
import {
  RiLockPasswordLine,
  RiUser3Line,
  RiGoogleLine,
  RiFacebookLine,
  RiTwitterLine,
} from 'react-icons/ri';

export function LoginPage() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onChange = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };
  const onSubmit = () => dispatch(login({ email, password }));
  return (
    <>
      <Helmet>
        <title>{websiteMetaTitleLoginPage}</title>
        <meta name="description" content={websiteMetaDescriptionLoginPage} />
      </Helmet>
      <div className="auth-pre-header">
        <h2>{t(translations.authPage.signIn())}</h2>
        <h5>{t(translations.authPage.existingAccount())}</h5>
        <div className="text-center">
          <IconButton aria-label="login google icon">
            <RiGoogleLine size={24} />
          </IconButton>
          <IconButton aria-label="login facebook icon">
            <RiFacebookLine size={24} />
          </IconButton>
          <IconButton aria-label="login twitter icon">
            <RiTwitterLine size={24} />
          </IconButton>
        </div>
      </div>
      <div className="auth-header">
        <Logo />
        <h5>
          {t(translations.authPage.signInSubtitle(), {
            websiteName: websiteName,
          })}
        </h5>
      </div>
      <div>
        <div>
          <FormControl className="auth-input">
            <InputLabel htmlFor="login-email">
              {t(translations.authPage.usernameOrEmail())}
            </InputLabel>
            <Input
              id="login-email"
              name="email"
              type={true ? 'text' : 'password'}
              value={undefined}
              onChange={onChange}
              endAdornment={
                <InputAdornment position="end">
                  <RiUser3Line size={20} />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div>
          <FormControl className="auth-input">
            <InputLabel htmlFor="login-password">
              {t(translations.authPage.password())}
            </InputLabel>
            <Input
              id="login-password"
              name="password"
              type={'password'}
              value={undefined}
              onChange={onChange}
              endAdornment={
                <InputAdornment position="end">
                  <RiLockPasswordLine size={20} />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
      </div>
      <div className="text-center">
        <Button size="large" onClick={onSubmit}>
          {t(translations.authPage.submit())}
        </Button>
      </div>
    </>
  );
}
