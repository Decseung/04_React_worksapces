import React, { useContext } from "react";
import "./ProductItem.css";
import { CartListContext } from "../../App";

function ProductItem({ data }) {
  const { cartList, setCartList } = useContext(CartListContext);

  const existingItem = cartList.find((item) => item.id === data.id);

  const addCartList = () => {
    if (existingItem) {
      const updateItem = cartList.map((item) =>
        item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartList(updateItem);
    } else {
      setCartList([...cartList, { ...data, quantity: 1 }]);
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
