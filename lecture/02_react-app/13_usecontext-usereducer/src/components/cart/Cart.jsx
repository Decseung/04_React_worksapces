import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import CartItem from "../cartitem/CartItem";
import { CartListContext } from "../../App";

function Cart() {
  const { cartList, setCartList } = useContext(CartListContext);

  const deleteAll = () => {
    setCartList([]);
  };

  let totalQuantity = cartList.reduce((acc, item) => (acc += item.quantity), 0);
  let totalPrice = cartList.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>장바구니 ({totalQuantity})</h2>
        {/* <!-- 장바구니에 담긴 아이템이 있으면 전체 삭제 버튼 표시 --> */}
        <button className="cart-clear-button" onClick={deleteAll}>
          전체 삭제
        </button>
      </div>

      {cartList.length !== 0 ? (
        <div className="cart-items">
          {cartList.map((cart, index) => {
            return (
              <CartItem
                cart={cart}
                key={index}
                cartList={cartList}
                setCartList={setCartList}
              />
            );
          })}
        </div>
      ) : (
        <p className="cart-empty">장바구니가 비어있습니다</p>
      )}

      <div className="cart-summary">
        <div className="cart-total">
          <span>총 금액:</span>
          <span className="cart-total-price">
            {totalPrice.toLocaleString()}원
          </span>
        </div>
        <button className="cart-order-button">주문하기</button>
      </div>
      {/* <!-- --------------------------------------- --> */}
    </div>
  );
}

export default Cart;
