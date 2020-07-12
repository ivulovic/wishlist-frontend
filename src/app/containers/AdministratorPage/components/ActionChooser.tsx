import React from 'react';
import { Radio } from 'app/components/Radio';

export function ActionChooser({ onChange, action }) {
  return (
    <div className="row-3">
      <Radio
        id="formActionCreate"
        label="Create"
        className="radio"
        name="formAction"
        onChange={onChange}
        value="create"
        isSelected={action === 'create'}
      />
      <Radio
        id="formActionUpdate"
        label="Update"
        className="radio"
        name="formAction"
        onChange={onChange}
        value="update"
        isSelected={action === 'update'}
      />
      <Radio
        id="formActionRemove"
        label="Remove"
        className="radio"
        name="formAction"
        onChange={onChange}
        value="remove"
        isSelected={action === 'remove'}
      />
    </div>
  );
}
