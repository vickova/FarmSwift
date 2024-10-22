import { combineReducers } from 'redux'
import { CartReducer } from './IndividualReducers';
import { WishReducer } from './IndividualReducers';

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  CartReducer,
  WishReducer
})

export default rootReducer