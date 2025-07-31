import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { LOGOUT } from "@/store/actions/types.js";
import menuReducer, { initialMenuState } from "@/store/reducers/menu.reducer";
import { ReduxSlices } from "@/utils/constants";

const middleware = [];

if (import.meta.env.MODE === "development") {
  middleware.push(logger);
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: [ReduxSlices.menu],
};

const combinedReducer = combineReducers({
  [ReduxSlices.menu]: menuReducer,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    localStorage.removeItem("persist:root");

    return combinedReducer(
      {
        [ReduxSlices.menu]: initialMenuState,
      },
      action
    );
  } else {
    return combinedReducer(state, action);
  }
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middleware),
  devTools: import.meta.env.MODE === "development",
});

export const persistor = persistStore(store);
