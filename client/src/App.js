import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav"
import Page from "./pages/Page"
import SubPage from "./pages/SubPage"


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/","/home"]}>
              <Page/>
          </Route>
          <Route exact path="/subpage/">
              <SubPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
