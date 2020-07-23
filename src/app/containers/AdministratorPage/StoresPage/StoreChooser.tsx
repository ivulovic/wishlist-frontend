import React from 'react';
import { Store } from 'types/Store';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

export function StoreChooser({ stores, onChange, value }) {
  const options = stores.map((s: Store) => ({
    value: s._id as any,
    label: s.name,
  }));
  const id = 'storeChooser';
  return (
    <FormControl className={'auth-input'}>
      <InputLabel id={`store-chooser-${id}`}>Choose action</InputLabel>
      <Select
        labelId={`store-chooser${id}`}
        id={`store-${id}`}
        name={id}
        value={value}
        onChange={onChange}
      >
        {options.map(
          (option: any): JSX.Element => (
            <MenuItem value={option.value}>{option.label}</MenuItem>
          ),
        )}
      </Select>
    </FormControl>
  );
}
