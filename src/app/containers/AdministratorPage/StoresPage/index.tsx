import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { StoresForm } from './StoresForm';
import { sliceKey, reducer, actions } from '../slice';
import { administratorSaga } from '../saga';
import { selectStores } from '../selectors';
import { ActionChooser } from '../components/ActionChooser';
import { StoreChooser } from './StoreChooser';

export function StoresPage() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: administratorSaga });
  const stores = useSelector(selectStores);

  const dispatch = useDispatch();
  const [values, setValues] = React.useState({} as any);
  const [store, setStore] = React.useState('');

  useEffect(() => {
    dispatch(actions.loadStores());
  }, [dispatch]);

  const onChange = e =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const onSubmit = () => {
    console.log({ formAction, values });
    const actionFn =
      formAction === 'create' ? actions.createStore : actions.updateStore;
    dispatch(actionFn(values));
  };
  const [formAction, setFormAction] = useState('create');
  const onActionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // dispatch(changeTheme(value));
    setFormAction(value);
    setValues({});
    setStore('');
  };
  const onStoreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (formAction === 'remove' && value) {
      if (window.confirm('Are you sure you want to remove this store?')) {
        dispatch(actions.removeStore(value));
        setStore('');
      } else {
        setStore(value);
      }
    } else {
      setStore(value);
      if (value) {
        let formValues = stores.find(s => s._id === value);
        if (formValues) {
          setValues(formValues);
        }
      }
    }
  };
  let canDisplayForm = false;
  let canDisplayStoreChooser = false;
  switch (formAction) {
    case 'create':
      canDisplayForm = true;
      break;
    case 'update':
      canDisplayStoreChooser = true;
      if (store) {
        canDisplayForm = true;
      }
      break;
    case 'remove':
      canDisplayStoreChooser = true;
      break;
  }
  return (
    <div>
      <div className="flex-row">
        <ActionChooser onChange={onActionChange} value={formAction} />
        {canDisplayStoreChooser && (
          <StoreChooser
            stores={stores}
            value={store}
            onChange={onStoreChange}
          />
        )}
      </div>
      <br />
      {canDisplayForm && (
        <StoresForm onChange={onChange} values={values} onSubmit={onSubmit} />
      )}
    </div>
  );
}
