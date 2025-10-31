import "./App.css";
import ProductList from "./components/productlist/ProductList";
import Cart from "./components/cart/Cart";
import { createContext, useState } from "react";

export const CartListContext = createContext();

function App() {
  const [cartList, setCartList] = useState([]);

  return (
    <div className="app-container">
      <CartListContext.Provider value={{ cartList, setCartList }}>
        {/* <!-- 상품 목록 컴포넌트 --> */}
        <ProductList />
        {/* <!-- 장바구니 컴포넌트 --> */}
        <Cart />
      </CartListContext.Provider>
    </div>
    // 1. 장바구니에 추가를 누르면 카트리스트 배열에 담긴다.
    // 2. 장바구니에 카트리스트 배열을 넘겨서 카트 아이템으로 표현한다
    // 3. 카트 아이템갯수만큼 장바구니 숫자가 늘어난다
    // 4. 총 금액
  );
}

export default App;
