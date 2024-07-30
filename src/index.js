import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route } from "react-router-dom";

import ExampleList from "./components/ExampleListComponent"
import Login from "./components/LoginComponent";
import Home from "./components/HomeComponent";

// import { Security, LoginCallback } from "@okta/okta-react";
// import { config } from "./utils/oktaConfig";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <React.StrictMode>
          {/*<Security {...config}>*/}
              <Route path="/" exact>
                  <Home />
              </Route>
              <Route path="/login">
                  <Login />
              </Route>
              {/*<Route path="/implicit/callback" component={LoginCallback} />*/}
              <Route path="/items">
                  <ExampleList />
              </Route>
          {/*</Security>*/}
      </React.StrictMode>
    </BrowserRouter>,
)
