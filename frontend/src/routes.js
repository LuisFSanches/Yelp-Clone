import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Importing Pages
import HomePage from "./pages/Home.js";
import UpdatePage from "./pages/Update.js";
import DetailPage from "./pages/Details.js";

export default function routes() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/restaurants/:id/update" component={UpdatePage} />
          <Route path="/restaurants/:id" component={DetailPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
