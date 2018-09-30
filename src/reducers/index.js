import { combineReducers } from 'redux';

import datacontacts from './contacts';
import datagroups from './groups';

const appReducer = combineReducers({
  contacts: datacontacts,
  groups : datagroups // contacts pertama merupakan yang akan dijadikan state, datacontacts merupakan nama reducers
});

export default appReducer;