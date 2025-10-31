import React from "react";
import "./ProductItem.css";

function ProductItem({ data, cartList, setCartList }) {
  const addCartList = () => {
    if (!cartList.find((item) => item.id === data.id)) {
      setCartList([...cartList, { ...data, quantity: 1 }]);
    } else {
      const updateItem = cartList.map((item) =>
        item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartList(updateItem);
    }
  };

  return (
    <div className="product-item">
      <h3 className="product-title">{data.name}</h3>
      <p className="product-description">{data.description}</p>
      <p className="product-price">{data.price.toLocaleString()}원</p>
      <button className="product-add-button" onClick={addCartList}>
        장바구니에 추가
      </button>
    </div>
  );
}

export default ProductItem;
