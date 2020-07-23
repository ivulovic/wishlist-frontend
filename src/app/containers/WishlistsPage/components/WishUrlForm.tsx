import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Button } from '@material-ui/core';
import { translations } from 'locales/i18n';
import { useTranslation } from 'react-i18next';

export function WishUrlForm({ onChange, onSubmit, values }) {
  const { t } = useTranslation();
  return (
    <div className="flex-row space-between">
      <FormControl className="auth-input">
        <InputLabel htmlFor="url">
          {t(translations.wishlists.urlInputLabel())}
        </InputLabel>
        <Input
          id="url"
          name="url"
          type={'text'}
          value={undefined}
          onChange={onChange}
        />
      </FormControl>
      <Button
        size="large"
        color="default"
        className="no-wrap"
        onClick={onSubmit}
      >
        {t(translations.authPage.submit())}
      </Button>
    </div>
  );
}
