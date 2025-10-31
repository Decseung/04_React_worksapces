import React, { useContext } from "react";
import "./CartItem.css";
import { CartListContext } from "../../App";

function CartItem({ cart }) {
  const { cartList, setCartList } = useContext(CartListContext);

  const deleteItem = () => {
    setCartList(cartList.filter((item) => item.id !== cart.id));
  };

  const handlePluse = () => {
    const UpdatePlus = cartList.map((item) => {
      return item.id === cart.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
    setCartList(UpdatePlus);
  };

  const handleMinus = () => {
    const UpdatePlus = cartList.map((item) => {
      return item.id === cart.id
        ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
        : item;
    });
    setCartList(UpdatePlus);
  };
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h4>{cart.name}</h4>
        <p className="cart-item-price">{cart.price.toLocaleString()}원</p>
      </div>

      <div className="cart-item-controls">
        <button className="cart-item-quantity-button" onClick={handleMinus}>
          -
        </button>
        <span className="cart-item-quantity">{cart.quantity}</span>
        <button className="cart-item-quantity-button" onClick={handlePluse}>
          +
        </button>

        <button className="cart-item-remove-button" onClick={deleteItem}>
          삭제
        </button>
      </div>
    </div>
  );
}

export default CartItem;
