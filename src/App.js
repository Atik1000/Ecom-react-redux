import React, { useEffect } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Layout from "../src/components/layout";
import Product from "./containers/Home";
import NotFound from "../src/containers/not_found";
import Cart from "../src/containers/cart";
import ProductDetail from "../src/containers/Product";
import Login from "./containers/auth/Login/LoginForm";
import SignUp from "./containers/auth/Signin/SignUp";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Admin from "../src/admin";
import Category from "./admin/AllCategory/CategoryCreate";
import ProductForm from "./admin/AllProduct//ProductForm";
import CategoryUpdateForm from "./admin/AllCategory/CategoryUpdate";
import CategoryDelete from "./admin/AllCategory/DeleteCategory";
import ProductUpdate from "./admin/AllProduct/ProductUpdate";
import ProductDelete from "./admin/AllProduct/DeleteProduct";
import Order from "./containers/order";
import OrderTotal from "./admin/AllOrder";
import { addSessionDatalogin } from "./store/action/sessionAction";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addSessionDatalogin());
  }, []);
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={"/"}>
            <Product />
          </Route>
          <Route exact path={"/product_detail/:id"}>
            <ProductDetail />
          </Route>
          <Route exact path={"/cart"}>
            <Cart />
          </Route>
          <PublicRoute
            restricted={true}
            component={Login}
            path="/login"
            exact
          />
          <PublicRoute
            restricted={true}
            component={SignUp}
            path="/signup"
            exact
          />
          <PrivateRoute exact path={"/order"} component={Order} />
          {/* Admin panel route */}
          <PrivateRoute exact path={"/admin"} component={Admin} />

          <PrivateRoute component={Category} exact path={"/add-category"} />
          <PrivateRoute
            component={CategoryUpdateForm}
            exact
            path={"/update-category"}
          />
          <PrivateRoute
            component={CategoryDelete}
            exact
            path={"/delete-category"}
          />
          <PrivateRoute component={ProductForm} exact path={"/add-product"} />
          <PrivateRoute
            component={ProductUpdate}
            exact
            path={"/update-product"}
          />
          <PrivateRoute
            component={ProductDelete}
            exact
            path={"/delete-product"}
          />
          <PrivateRoute component={OrderTotal} exact path={"/order-total"} />
          <Route exact path={"/404"}>
            <NotFound />
          </Route>
          <Route exact path={"*"}>
            <Redirect to={"/404"}></Redirect>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
