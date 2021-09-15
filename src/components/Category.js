import React from "react";
import { Link } from "react-router-dom";

function Category({ data }) {
  return (
    <Link to={`/category/${data.name}/${data.uuid}`}>
      {" "}
      <li className="category">
        <img src={"https://api.doover.tech" + data.picture} />
        <h2>{data.name}</h2>
      </li>
    </Link>
  );
}

export default Category;
