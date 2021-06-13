import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SighIn from './component/signin'
import Employ from './component/allEmployed'
import PrivateErea from './component/privateArea'
import AdminEmploy from './component/allEmployedadmin'
function App() {
  return (
    <div className="App">
        <Router>
        <Switch>

        <Route path="/allEmployedadmin">
            <AdminEmploy />
          </Route>


        <Route path="/privateArea">
            <PrivateErea />
          </Route>

          <Route path="/allEmployed">
            <Employ />
          </Route>


          <Route path="/">
            <SighIn />
          </Route>

        </Switch>
        </Router>


       {/* <SighIn></SighIn>
       <GetApi></GetApi> */}

    </div>
  );
}

export default App;
