import { combineReducers } from 'redux'
import { CartReducer } from './IndividualReducers';
import { WishReducer, UserReducer } from './IndividualReducers';

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  CartReducer,
  WishReducer,
  UserReducer
})

export default rootReducer