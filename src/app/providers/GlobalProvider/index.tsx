import React from 'react';

import { sliceKey, reducer } from './slice';
import { useInjectReducer } from 'utils/redux-injectors';

export default function GlobalProvider() {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  return <div />;
}
