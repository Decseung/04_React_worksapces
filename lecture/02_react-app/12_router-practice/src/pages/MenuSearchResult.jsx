import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MenuList from "../components/MenuList";
import { searchMenus } from "../api/MenuAPI";

function MenuSearchResult() {
  const [menuDatas, setMenuDatas] = useState([]);
  const [searchParams] = useSearchParams();

  const condition = searchParams.get("condition");
  const keyword = searchParams.get("keyword");

  useEffect(() => {
    setMenuDatas(searchMenus(condition, keyword));
  }, []);

  return (
    <div>
      <h3>메뉴 검색 결과 페이지</h3>
      <MenuList menus={menuDatas} />
    </div>
  );
}

export default MenuSearchResult;
