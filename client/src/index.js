import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import App from "./components/layout/App";
import registerServiceWorker from "./registerServiceWorker";

const componsedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(reducers, {}, componsedEnhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
