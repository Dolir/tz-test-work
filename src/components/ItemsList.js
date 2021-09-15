import React from "react";
import Item from "./Item";
import { getItemsByCategory } from "../features/items/itemsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import "../styles/items.css";
import { NavLink } from "react-router-dom";
function ItemsList() {
  const params = useParams();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const auth = useSelector((state) => state.auth);

  React.useEffect(() => {
    dispatch(
      getItemsByCategory({
        token: auth.token.access,
        categoryId: params.categoryId,
      })
    );
    return () => {};
  }, []);
  return (
    <div>
      <h3 className="path-title">
        <NavLink to="/">
          <span>Главная/ </span>
        </NavLink>

        <strong>{params.categoryName}</strong>
      </h3>
      <ul className="items-list">
        {items.items.map((item) => (
          <Item data={item} />
        ))}
      </ul>
    </div>
  );
}

export default ItemsList;
