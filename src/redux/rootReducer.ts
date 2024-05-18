import { combineReducers } from 'redux'
import reducer from './initReducer'
const rootReducer = combineReducers({
  reducer: reducer.IndexReducer,
  core: reducer.ReducerCore
})

export default rootReducer