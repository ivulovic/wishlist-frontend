import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

export function ActionChooser({ onChange, value }) {
  const options = [
    { value: 'create', label: 'Create' },
    { value: 'update', label: 'Update' },
    { value: 'remove', label: 'Remove' },
  ];
  const id = 'actionChooser';
  return (
    <FormControl className={'auth-input'}>
      <InputLabel id={`store-action-${id}`}>Choose action</InputLabel>
      <Select
        labelId={`store-action-${id}`}
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
