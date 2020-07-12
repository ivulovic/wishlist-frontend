import React from 'react';

export function StoresForm({ onChange, onSubmit, values }) {
  return (
    <div>
      <div className="form-body wide-body shrink-children">
        <div className="row-3">
          <div>
            <label htmlFor="email">
              <h4>Name</h4>
            </label>
            <input
              id="name"
              name="name"
              onChange={onChange}
              value={values.name || ''}
            />
          </div>
          <div>
            <label htmlFor="origin">
              <h4>Origin</h4>
            </label>
            <input
              id="origin"
              name="origin"
              onChange={onChange}
              value={values.origin || ''}
            />
          </div>
          <div>
            <label htmlFor="logo">
              <h4>Logo</h4>
            </label>
            <input
              id="logo"
              name="logo"
              onChange={onChange}
              value={values.logo || ''}
            />
          </div>
        </div>
        <div className="row-2">
          <div>
            <label htmlFor="titleSelector">
              <h4>Title Selector</h4>
            </label>
            <input
              id="titleSelector"
              name="titleSelector"
              onChange={onChange}
              value={values.titleSelector || ''}
            />
          </div>
          <div>
            <label htmlFor="imageSelector">
              <h4>Image Selector</h4>
            </label>
            <input
              id="imageSelector"
              name="imageSelector"
              onChange={onChange}
              value={values.imageSelector || ''}
            />
          </div>
        </div>
        <div className="row-3">
          <div>
            <label htmlFor="oldPriceSelector">
              <h4>Old Price Selector</h4>
            </label>
            <input
              id="oldPriceSelector"
              name="oldPriceSelector"
              onChange={onChange}
              value={values.oldPriceSelector || ''}
            />
          </div>
          <div>
            <label htmlFor="currentPriceSelector">
              <h4>Current Price Selector</h4>
            </label>
            <input
              id="currentPriceSelector"
              name="currentPriceSelector"
              onChange={onChange}
              value={values.currentPriceSelector || ''}
            />
          </div>
          <div>
            <label htmlFor="currencySelector">
              <h4>Currency Selector</h4>
            </label>
            <input
              id="currencySelector"
              name="currencySelector"
              onChange={onChange}
              value={values.currencySelector || ''}
            />
          </div>
        </div>
        <div className="row-3">
          <div>
            <label htmlFor="oldPriceParser">
              <h4>Old Price Parser</h4>
            </label>
            <input
              id="oldPriceParser"
              name="oldPriceParser"
              onChange={onChange}
              value={values.oldPriceParser || ''}
            />
          </div>
          <div>
            <label htmlFor="currentPriceParser">
              <h4>Current Price Parser</h4>
            </label>
            <input
              id="currentPriceParser"
              name="currentPriceParser"
              onChange={onChange}
              value={values.currentPriceParser || ''}
            />
          </div>
          <div>
            <label htmlFor="currencyParser">
              <h4>Currency Parser</h4>
            </label>
            <input
              id="currencyParser"
              name="currencyParser"
              onChange={onChange}
              value={values.currencyParser || ''}
            />
          </div>
        </div>
      </div>
      <div className="form-footer">
        <div className="flex-row">
          <button type="button" onClick={onSubmit}>
            <h4>Submit</h4>
          </button>
        </div>
      </div>
    </div>
  );
}
