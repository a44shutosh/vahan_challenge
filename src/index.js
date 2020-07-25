import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";


// Containers
import Dashboard from "./containers/Dashboard/DashboardContainer";

import configureStore from "./store/configureStore";
import { PersistGate } from "redux-persist/es/integration/react";

const { persistor, store } = configureStore();
const LoadingStoreFromLocalStorage = () => {
  return <div>Please wait...</div>;
};

ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      persistor={persistor}
      loading={<LoadingStoreFromLocalStorage />}
    >
      <HashRouter>
        <Switch>
          <Route exact path="/dashboard" name="dashboard" component={Dashboard} />
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </HashRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
