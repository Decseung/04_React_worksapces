import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMenuDetail } from "../api/MenuAPI";

// 특정 메뉴의 상세페이지용 컴포넌트
function MenuDetail() {
  const { id } = useParams();
  const [menu, setMenu] = useState();

  useEffect(() => {
    setMenu(getMenuDetail(id));
  }, [id]);

  return (
    <>
      <h3>메뉴 상세 페이지</h3>
      {menu ? (
        <div style={{ textAlign: "center" }}>
          <img src={menu.detail.image} />
          <h4>메뉴명: {menu.menuName}</h4>
          <h4>카테고리: {menu.categoryName}</h4>
          <h4>가격: {menu.menuPrice.toLocaleString()}원</h4>
          <h4>주문 가능 여부: {menu.isOrderable ? "가능" : "불가능"}</h4>
          <h4>상세 설명 : {menu.detail.description}</h4>
        </div>
      ) : (
        <div>조회된 메뉴 없어</div>
      )}
    </>
  );
}

export default MenuDetail;
