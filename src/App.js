import React from "react";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


function App() {
  const user = true;

  return (
    <Router>
    <Switch>
    <Route exact path="/">
        {user ? <Home/> : <Redirect to="/register"/>}
     </Route>
    <Route exact path="/register">
    {!user ? <Register /> : <Redirect to="/"/>}
      </Route>
    <Route exact path="/login">
    {!user ? <Login /> : <Redirect to="/"/>}
      </Route>
      {user && (
        <>
        <Route path="/Movies">
         <Home type="Movies"/>
        </Route>
        <Route path="/Series">
         <Home type="Series"/>
        </Route>
        <Route path="/watch">
        <Watch />
        </Route>
        </>
      )}
    </Switch>
    </Router>
  )
}

export default App;
