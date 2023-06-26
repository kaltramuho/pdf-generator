import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authenticationReducer from './reducers/authentication'
import userReducer from './reducers/userslice'
import crewingReducer from './reducers/crewingslice'
import categoryslice from './reducers/categoryslice'
import documentslice from './reducers/documentslice'
import marintimeslice from './reducers/marintimeslice'
import competencyslice from './reducers/competencyslice'

const store = configureStore({
  reducer: {
    authenticater: authenticationReducer,
    user: userReducer,
    crewings: crewingReducer,
    categories: categoryslice,
    documents: documentslice,
    marintimes: marintimeslice,
    competencies: competencyslice
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;