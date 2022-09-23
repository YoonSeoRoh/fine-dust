import React from "react";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/GlobalStyle";

const container = document.getElementById("root");
const root = createRoot(container);
const persistor = persistStore(store);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <Router />
    </PersistGate>
  </Provider>
);
