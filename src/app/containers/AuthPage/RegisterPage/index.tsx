import React from 'react';

import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { register } from 'app/providers/AuthProvider/actions';
import {
  websiteName,
  websiteMetaTitleRegisterPage,
  websiteMetaDescriptionRegisterPage,
} from 'settings';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { IconButton, Button } from '@material-ui/core';
import { Logo } from 'app/containers/NavBar/Logo';
import {
  RiGoogleLine,
  RiFacebookLine,
  RiTwitterLine,
  RiMailOpenLine,
  RiUser3Line,
  RiLockPasswordLine,
} from 'react-icons/ri';

export function RegisterPage() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const testUsername = () => {
    const onlyNumbersAndLettersRegex = /^[a-zA-Z0-9]+$/;
    if (onlyNumbersAndLettersRegex.test(username)) {
      return true;
    }
    alert(t(translations.authPage.usernameError()));
    return false;
  };

  const onChange = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'username':
        setUsername(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'confirmPassword':
        setConfirmPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const onSubmit = () => {
    if (
      email &&
      username &&
      testUsername() &&
      password &&
      password === confirmPassword
    ) {
      dispatch(register({ email, username, password }));
    }
  };
  return (
    <>
      <Helmet>
        <title>{websiteMetaTitleRegisterPage}</title>
        <meta name="description" content={websiteMetaDescriptionRegisterPage} />
      </Helmet>
      <div className="auth-pre-header">
        <h2>{t(translations.authPage.signUp())}</h2>
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
          {t(translations.authPage.signUpSubtitle(), {
            websiteName: websiteName,
          })}
        </h5>
      </div>
      <div>
        <div>
          <FormControl className="auth-input">
            <InputLabel htmlFor="register-email">
              {t(translations.authPage.email())}
            </InputLabel>
            <Input
              id="register-email"
              name="email"
              type={'text'}
              value={undefined}
              onChange={onChange}
              endAdornment={
                <InputAdornment position="end">
                  <RiMailOpenLine size={20} />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div>
          <FormControl className="auth-input">
            <InputLabel htmlFor="register-username">
              {t(translations.authPage.username())}
            </InputLabel>
            <Input
              id="register-username"
              name="username"
              type={'text'}
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
          <div className="inputs-row">
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
            <div>
              <FormControl className="auth-input">
                <InputLabel htmlFor="login-confirmPassword">
                  {t(translations.authPage.passwordConfirm())}
                </InputLabel>
                <Input
                  id="login-confirmPassword"
                  name="confirmPassword"
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
