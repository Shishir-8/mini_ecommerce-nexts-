import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from './slice/cartSlice'
import storage from 'redux-persist/lib/storage'
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  cart: cartReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE,PERSIST, REGISTER]
      }
    })
});

export const persistor = persistStore(store)