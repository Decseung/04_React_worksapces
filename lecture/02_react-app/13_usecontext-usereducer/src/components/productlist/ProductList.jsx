import React, { useContext } from "react";
import "./ProductList.css";
import data from "../../data/products.json";
import ProductItem from "../productitem/ProductItem";
import { CartListContext } from "../../App";

function ProductList() {
  const { cartList, setCartList } = useContext(CartListContext);
  return (
    <div>
      <h2>상품 목록</h2>
      <div className="product-list-grid">
        {/* <!-- 상품 아이템(ProductItem)들 배치 자리 --> */}
        {data.map((data) => {
          return (
            <ProductItem
              data={data}
              key={data.id}
              cartList={cartList}
              setCartList={setCartList}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
