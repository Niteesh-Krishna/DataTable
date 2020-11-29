import React, { useState } from "react";
import SignIn from "./Signin";
import Register from "./Register";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

import Dashboard from "./Dashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <SignIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          )}
        />
        <Route
          exact
          path="/register"
          render={(props) => <Register {...props} />}
        />

        <PrivateRoute
          exact
          path="/dashboard"
          component={Dashboard}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
      </Switch>
    </div>
  );
}

export default App;
