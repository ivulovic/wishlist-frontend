import React from 'react';
import { Select } from 'app/components/Select';
import { Store } from 'types/Store';

export function StoreChooser({ stores, onChange, value }) {
  return (
    <Select
      id="storeChooser"
      options={stores.map((s: Store) => ({
        value: s._id as any,
        label: s.name,
      }))}
      name="storeChooser"
      onChange={onChange}
      value={value}
    />
  );
}
