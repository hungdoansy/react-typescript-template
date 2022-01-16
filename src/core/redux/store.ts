import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web

import rootReducer from "./reducer"

const persistConfig = {
    key: "can_be_anything",
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const getStoreAndPersistor = () => {
    const store = configureStore({
        reducer: persistedReducer,
        preloadedState: {},
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
        devTools: true,
    })

    const persistor = persistStore(store)
    return { store, persistor }
}

export default getStoreAndPersistor
