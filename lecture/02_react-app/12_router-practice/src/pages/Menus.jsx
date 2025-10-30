import Reactl, { useEffect, useState } from "react";
import MenuList from "../components/MenuList";
import { getMenusList } from "../api/MenuAPI";
import MenuSearchForm from "../components/MenuSearchForm";

// 메뉴 목록 페이지용 컴포넌트
function Menus() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    setMenus(getMenusList());
  }, []);

  return (
    <>
      <h3>메뉴 목록 페이지</h3>
      {/* 검색 폼 */}
      <MenuSearchForm />
      {/* 목록 컴포넌트 */}
      <MenuList menus={menus} />
    </>
  );
}

export default Menus;
