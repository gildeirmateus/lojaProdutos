import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/home/home";
import AddProducts from "./components/addProducts";
import EditProducts from "./components/editProducts";
import { GlobalContext, GlobalProvider } from "./context/globalState";
import 'bootstrap/dist/css/bootstrap.min.css';

const Routes = () => (
  <div style={{maxWidth: "30rem", margin: "10rem auto"}}>
    <GlobalProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/addProducts" component={AddProducts} />
          <Route exact path="/editProducts/:id" component={EditProducts} />
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  </div>
);

export default Routes;
