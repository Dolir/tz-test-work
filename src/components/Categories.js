import React from "react";
import Category from "./Category";
import { getCategories } from "../features/items/itemsSlice";
import { useDispatch, useSelector } from "react-redux";
import "../styles/categories.css";
function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.items.categories);
  const auth = useSelector((state) => state.auth);
  React.useEffect(() => {
    dispatch(getCategories(auth.token.access));
  }, [auth.isAuthenticated]);
  return (
    <div className="content-block">
      <h3 className="path-title">Категории</h3>
      <ul className="categories-list">
        {categories.map((category) => (
          <Category data={category} key={category.uuid} />
        ))}
      </ul>
    </div>
  );
}

export default Categories;
