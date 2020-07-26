import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Button, Select, MenuItem } from '@material-ui/core';

const availableParsers = [
  { value: 'default', label: 'Default' },
  {
    value: 'separateBySpaceAndTakeFirst',
    label: 'Separate by Space and take First',
  },
  // {
  //   value: 'separateBySpaceAndTakeFirstTwo',
  //   label: 'Separate by Space and take First Two',
  // },
  {
    value: 'separateBySpaceAndTakeLast',
    label: 'Separate by Space and take Last',
  },
];

export function StoresForm({ onChange, onSubmit, values }) {
  const fields = [
    { type: 'text', id: 'name', label: 'Name' },
    { type: 'text', id: 'origin', label: 'Origin' },
    { type: 'text', id: 'logo', label: 'Logo' },
    { type: 'text', id: 'titleSelector', label: 'Title Selector' },
    { type: 'text', id: 'imageSelector', label: 'Image Selector' },
    { type: 'text', id: 'oldPriceSelector', label: 'Old Price Selector' },
    {
      type: 'text',
      id: 'currentPriceSelector',
      label: 'Current Price Selector',
    },
    { type: 'text', id: 'currencySelector', label: 'Currency Selector' },
    {
      type: 'select',
      id: 'oldPriceParser',
      label: 'Old Price Parser',
      defaultValue: 'separateBySpaceAndTakeFirst',
      options: availableParsers,
    },
    {
      type: 'select',
      id: 'currentPriceParser',
      label: 'Current Price Parser',
      defaultValue: 'separateBySpaceAndTakeFirst',
      options: availableParsers,
    },
    {
      type: 'select',
      id: 'currencyParser',
      label: 'Currency Parser',
      defaultValue: 'separateBySpaceAndTakeLast',
      options: availableParsers,
    },
  ];
  const renderField = ({
    type,
    id,
    label,
    defaultValue = '',
    options = [] as any,
  }) => {
    switch (type) {
      case 'select':
        return (
          <FormControl className={'auth-input'}>
            <InputLabel id={`store-${id}`}>{label}</InputLabel>
            <Select
              labelId={`store-${id}`}
              id={`store-${id}`}
              name={id}
              value={values[id] || defaultValue}
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
      case 'text':
        return (
          <FormControl className="auth-input">
            <InputLabel htmlFor={`store-${id}`}>{label}</InputLabel>
            <Input
              id={`store-${id}`}
              name={id}
              type={'text'}
              value={values[id] || ''}
              onChange={onChange}
            />
          </FormControl>
        );
    }
  };
  return (
    <div>
      {fields.map(field => (
        <div>{renderField(field)}</div>
      ))}
      <div className="text-center">
        <Button size="large" onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}
