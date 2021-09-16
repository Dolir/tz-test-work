import React from "react";
import Item from "./Item";
import {
  getItemsByCategory,
  clearItems,
  getItemsBySearchTerm,
} from "../features/items/itemsSlice";
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
    if (params.searchTerm) {
      dispatch(
        getItemsBySearchTerm({
          token: auth.token.access,
          searchTerm: params.searchTerm,
        })
      );
    } else {
      dispatch(
        getItemsByCategory({
          token: auth.token.access,
          categoryId: params.categoryId,
        })
      );
    }

    return () => {
      dispatch(clearItems());
    };
  }, [params.searchTerm]);
  return (
    <div>
      <h3 className="path-title">
        {params.searchTerm ? (
          <React.Fragment>
            <span>Поиск/ </span>

            <strong>{params.searchTerm}</strong>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <NavLink to="/">
              <span>Главная/ </span>
            </NavLink>

            <strong>{params.categoryName}</strong>
          </React.Fragment>
        )}
      </h3>
      <ul className="items-list">
        {items.items.map((item) => (
          <Item data={item} key={item.uuid} />
        ))}
      </ul>
    </div>
  );
}

export default ItemsList;
