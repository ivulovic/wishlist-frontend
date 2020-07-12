import React from 'react';

export function WishAdditionalForm({ onChange, onSubmit, values }) {
  return (
    <div className="form-body wide-body shrink-children">
      <div>
        <label htmlFor="description">
          <h4>Would you like to add additional description to this product?</h4>
        </label>
        <input
          id="description"
          name="description"
          onChange={onChange}
          value={values.description || ''}
        />
      </div>
      <div className="form-footer" style={{ marginBottom: '2rem' }}>
        <div className="flex-row">
          <button type="button" onClick={onSubmit}>
            <h4>Submit</h4>
          </button>
        </div>
      </div>
    </div>
  );
}
