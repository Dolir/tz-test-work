import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartItem,
  updateCartItemQuantity,
} from "../features/cart/cartSlice";
import HintModal from "./HintModal";
function Item({ data }) {
  const cart = useSelector((state) => state.cart);
  const [hint, setHint] = React.useState(false);
  const thisCartItem = cart.cartItems.filter((x) => x.uuid === data.uuid);
  const [quantity, setQuantity] = React.useState(
    thisCartItem.length > 0 ? thisCartItem[0].quantity : 0
  );
  const dispatch = useDispatch();

  function addItem() {
    dispatch(
      addCartItem({
        ...data,
        quantity: quantity,
      })
    );
    setQuantity((prev) => prev + 1);
  }
  function removeItem() {
    dispatch(
      updateCartItemQuantity({
        uuid: data.uuid,
        quantity: quantity,
      })
    );
    setQuantity((prev) => prev - 1);
  }

  return (
    <li className="item">
      <HintModal modal={hint} setModal={setHint} hint={data.hint} />
      <img src={"https://api.doover.tech" + data.picture} alt={data.name} />
      <div className="item-info">
        <h4>{data.name}</h4>
        <div className="days">
          Срок доставки/{" "}
          <span>{Math.ceil(data.duration / 3600 / 24)} день</span>
        </div>
        <h4>{data.price.toLocaleString().replace(/,/g, " ")} тг</h4>
        <div className="incrementers">
          <button onClick={addItem}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="15.6471"
                cy="15.6471"
                r="14.6471"
                stroke="#172853"
                strokeWidth="2"
              />
              <path
                d="M22.1667 15.6471H9.12744"
                stroke="#172853"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M15.6471 22.1667V9.12747"
                stroke="#172853"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <span>{quantity === 0 ? 1 : quantity}</span>

          <button
            className="remove-btn"
            onClick={removeItem}
            style={
              quantity < 1
                ? {
                    display: "none",
                    pointerEvents: "none",
                  }
                : {
                    display: "block",
                    pointerEvents: "auto",
                  }
            }
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="15.8824"
                cy="15.6471"
                r="14.6471"
                stroke="#172853"
                strokeWidth="2"
              />
              <path
                d="M22.402 15.647H9.36279"
                stroke="#172853"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <button className="hint-btn" onClick={() => setHint(true)}>
        <svg
          width="10"
          height="17"
          viewBox="0 0 10 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.06869 11.8612V10.8336C3.06869 10.2627 3.19458 9.74171 3.44636 9.27072C3.69813 8.79972 4.00174 8.40723 4.35719 8.09323C4.71263 7.77924 5.06808 7.47951 5.42353 7.19406C5.77897 6.89434 6.08258 6.56607 6.33436 6.20925C6.58613 5.83817 6.71202 5.44567 6.71202 5.03177C6.71202 4.53223 6.50468 4.11119 6.08999 3.76865C5.6753 3.4261 5.16435 3.25483 4.55713 3.25483C3.74256 3.25483 2.95762 3.55456 2.20229 4.15401L0.625 2.29144C1.75058 1.26381 3.14275 0.75 4.80149 0.75C6.11961 0.75 7.26 1.12109 8.22267 1.86326C9.18533 2.59116 9.66667 3.56169 9.66667 4.77486C9.66667 5.4314 9.53337 6.02371 9.26679 6.5518C9.00021 7.07988 8.67438 7.51519 8.28931 7.85773C7.90424 8.20028 7.51918 8.52854 7.13411 8.84254C6.76385 9.14226 6.44543 9.47767 6.17885 9.84876C5.91226 10.2198 5.77897 10.6123 5.77897 11.0262V11.8612H3.06869ZM3.04648 16.25V13.7023H5.77897V16.25H3.04648Z"
            fill="#B0B3BC"
          />
        </svg>
      </button>
    </li>
  );
}

export default Item;
