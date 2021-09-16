import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import "../styles/cart.css";
import SubmitModal from "./SubmitModal";
function Cart() {
  const cart = useSelector((state) => state.cart);
  const [modal, setModal] = React.useState(false);
  function calcTotal() {
    let array = [];
    cart.cartItems.map((x) => array.push(parseInt(x.price) * x.quantity));
    if (array.length < 1) return 0;
    return array
      .reduce((accu, current) => accu + current)
      .toLocaleString()
      .replace(/,/g, " ");
  }
  function handleSubmit() {
    setModal(true);
  }
  return (
    <div className="cart-container">
      <SubmitModal modal={modal} setModal={setModal} />
      <h3 className="path-title">
        <span>Корзина</span>
      </h3>
      <div className="cart">
        <ul className="cart-list">
          {cart.cartItems.map((x) => (
            <CartItem data={x} key={x.uuid} />
          ))}
        </ul>
        <div className="checkout">
          <div>
            <h2>ИТОГО</h2>
            <span>{cart.cartItems.length} вещей</span>
            <h4>Общая сумма {calcTotal()} тг</h4>
          </div>

          <button onClick={handleSubmit} className="submit-btn">
            Оформить
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
