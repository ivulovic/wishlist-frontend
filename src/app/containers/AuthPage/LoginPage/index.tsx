import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { login } from 'app/providers/AuthProvider/actions';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import {
  websiteName,
  websiteMetaTitleLoginPage,
  websiteMetaDescriptionLoginPage,
} from 'settings';
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
      <div className="base-bg">
        <div className="base">
          <div>
            <div className="centered-content-wrapper">
              <div className="centered-form-wrapper">
                <div className="form-header">
                  <h2>{t(translations.authPage.signIn())}</h2>
                  <h5>
                    {t(translations.authPage.signInSubtitle(), {
                      websiteName: websiteName,
                    })}
                  </h5>
                </div>
                <div className="form-body shrink-children">
                  <div>
                    <label htmlFor="email">
                      <h4>{t(translations.authPage.usernameOrEmail())}</h4>
                    </label>
                    <input
                      id="email"
                      name="email"
                      onChange={onChange}
                      value={email}
                    />
                  </div>
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
                </div>
                <div className="form-footer">
                  <NavLink to="/sign-up">
                    {t(translations.authPage.signUp())}
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
