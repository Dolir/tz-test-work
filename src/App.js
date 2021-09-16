import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import ItemsList from "./components/ItemsList";
import Cart from "./components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./features/auth/authSlice";
import Footer from "./components/Footer";
function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  React.useEffect(() => {
    dispatch(loadUser());
  }, [auth.isAuthenticated]);
  return (
    <div className="App">
      <Router>
        <div className="content">
          <Header />
          {auth.isAuthenticated ? (
            <Switch>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/category/:categoryName/:categoryId">
                <ItemsList />
              </Route>
              <Route path="/search/:searchTerm">
                <ItemsList />
              </Route>
              <Route path="/">
                <Categories />
              </Route>
            </Switch>
          ) : (
            ""
          )}
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
