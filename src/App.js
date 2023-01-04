import React from "react";
import "./css/App.scss";

// Screens
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Siderbar from "./components/Sidebar";
import Home from "./screens/Home";
import Users from "./screens/Users";
import Statistics from "./screens/Statistics";
import Support from "./screens/Support";
import SupportManagment from "./screens/SupportManagment";
import Companies from "./screens/Companies";
import Download from "./screens/Download";
import Login from "./screens/Login";
import ForgotPassword from "./screens/ForgotPassword";

function App() {
  return (
    <div className="App rel">
      <BrowserRouter>
        <Siderbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/statistics" component={Statistics} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/support-managment" component={SupportManagment} />
        <Route exact path="/companies" component={Companies} />
        <Route exact path="/download" component={Download} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot" component={ForgotPassword} />
      </BrowserRouter>
    </div>
  );
}

export default App;
