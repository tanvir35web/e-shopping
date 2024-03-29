import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store.jsx";
import { Provider } from "react-redux";
import { app } from "./firebase.config.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store} app={app} >
        <PersistGate loading ={"loading"} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);
