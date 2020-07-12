import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { login } from 'app/providers/AuthProvider/actions';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';

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
    <div className="base-bg">
      <div className="base">
        <div>
          <div className="centered-content-wrapper">
            <div className="centered-form-wrapper">
              <div className="form-header">
                <h2>{t(translations.authPage.signIn())}</h2>
                <h5>{t(translations.authPage.signInSubtitle())}</h5>
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
                <div className="flex-row">
                  <NavLink to="/sign-up">
                    <h4>{t(translations.authPage.signUp())}</h4>
                  </NavLink>
                  <button type="button" onClick={onSubmit}>
                    <h4>{t(translations.authPage.submit())}</h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}