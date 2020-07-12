import React from 'react';

export function WishUrlForm({ onChange, onSubmit, values }) {
  return (
    <div className="form-body single-row-form">
      <input
        id="url"
        name="url"
        onChange={onChange}
        value={values.url || ''}
        placeholder="Enter URL"
      />
      <div className="form-footer">
        <button type="button" onClick={onSubmit}>
          <h4>Submit</h4>
        </button>
      </div>
    </div>
  );
}
