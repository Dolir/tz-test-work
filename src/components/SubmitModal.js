import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
function SubmitModal({ modal, setModal }) {
  const dispatch = useDispatch();
  function handleClear() {
    dispatch(clearCart());
  }
  function handleExit() {
    setModal(false);
    dispatch(clearCart());
  }
  return (
    <div
      className="modal-container"
      style={
        modal
          ? {
              display: "flex",
              pointerEvents: "auto",
            }
          : {
              display: "none",
              pointerEvents: "none",
            }
      }
    >
      <div className="modal">
        <button className="delete-btn" onClick={handleExit}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 12.9998L2.00024 2"
              stroke="#B0B3BC"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M2.00001 13L12.9998 2.00031"
              stroke="#B0B3BC"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="submit-text">
          <div>
            <h2>Спасибо за заказ</h2>
            <span>Отслеживайте статус вашего заказа в профиле</span>{" "}
          </div>
          <NavLink to="/">
            <button className="submit-btn" onClick={handleClear}>
              На главную
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SubmitModal;
