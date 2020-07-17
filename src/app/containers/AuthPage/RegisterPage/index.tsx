import React from 'react';

import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { register } from 'app/providers/AuthProvider/actions';
import {
  websiteName,
  websiteMetaTitleRegisterPage,
  websiteMetaDescriptionRegisterPage,
} from 'settings';

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
      <div className="base-bg">
        <div className="base">
          <div>
            <div className="centered-content-wrapper">
              <div className="centered-form-wrapper">
                <div className="form-header">
                  <h2>{t(translations.authPage.signUp())}</h2>
                  <h5>
                    {t(translations.authPage.signUpSubtitle(), { websiteName })}
                  </h5>
                  <br />
                </div>
                <div className="form-body shrink-children">
                  <div>
                    <label htmlFor="email">
                      <h4>{t(translations.authPage.email())}</h4>
                    </label>
                    <input
                      id="email"
                      name="email"
                      onChange={onChange}
                      value={email}
                    />
                  </div>
                  <div>
                    <label htmlFor="username">
                      <h4>{t(translations.authPage.username())}</h4>
                    </label>
                    <input
                      id="username"
                      name="username"
                      onChange={onChange}
                      value={username}
                    />
                  </div>
                  <div>
                    <div className="inputs-row">
                      <div>
                        <label htmlFor="password">
                          <h4>{t(translations.authPage.password())}</h4>
                        </label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          onChange={onChange}
                          value={password}
                        />
                      </div>
                      <div>
                        <label htmlFor="confirmPassword">
                          <h4>{t(translations.authPage.passwordConfirm())}</h4>
                        </label>
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          onChange={onChange}
                          value={confirmPassword}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-footer">
                  <NavLink to="/sign-in">
                    {t(translations.authPage.signIn())}
                  </NavLink>
                  <button type="button" onClick={onSubmit}>
                    {t(translations.authPage.submit())}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
