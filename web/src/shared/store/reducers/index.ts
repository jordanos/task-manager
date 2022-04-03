import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appReducer from './appReducer';
import taskReducer from './taskReducer';
import userReducer from './userReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

// The key of this object will be the name of the store
const rootReducer = combineReducers({
  app: appReducer,
  task: taskReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
