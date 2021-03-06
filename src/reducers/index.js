import { combineReducers } from 'redux'
import { isLoadingReducer } from './isLoadingReducer.js'
import { hasErroredReducer } from './hasErroredReducer.js'
import { moviesReducer } from './moviesReducer.js'
import { signInReducer } from './signInReducer.js'
import { getUserNameReducer } from './getUserNameReducer.js'

export const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  hasErrored: hasErroredReducer,
  movies: moviesReducer,
  userId: signInReducer,
  userName: getUserNameReducer
})
