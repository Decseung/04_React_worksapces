import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MenuSearchForm() {
  const [searchInput, setSeachInput] = useState({
    condition: "menuName",
    keyword: "",
  });

  const navigate = useNavigate();

  const handleSearchInputChange = (e) => {
    setSeachInput({ ...searchInput, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    if (e.key === "Enter")
      navigate(
        `/menus/search?condition=${searchInput.condition}&keyword=${searchInput.keyword}`
      );
  };

  return (
    <div style={{ display: "flex", gap: "5px", margin: "10px" }}>
      <select
        name="condition"
        value={searchInput.condition}
        onChange={handleSearchInputChange}
      >
        <option value="menuName" defaultValue="menuName">
          메뉴명
        </option>
        <option value="categoryName">카테고리명</option>
      </select>
      <input
        type="search"
        placeholder="검색어를 입력하세요."
        name="keyword"
        value={searchInput.keyword}
        style={{ textAlign: "right" }}
        onChange={handleSearchInputChange}
        onKeyDown={handleSearch}
      />
    </div>
  );
}

export default MenuSearchForm;
