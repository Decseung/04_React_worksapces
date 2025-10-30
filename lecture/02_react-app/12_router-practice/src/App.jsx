import { Route, RouterProvider, Routes } from "react-router-dom";
import "./App.css";
import MainLayOut from "./layouts/MainLayOut";
import Home from "./pages/Home";
import About from "./pages/About";
import Menus from "./pages/Menus";
import MenuDetail from "./pages/MenuDetail";
import MenuSearchResult from "./pages/MenuSearchResult";
import { router } from "./routes/router";

function App() {
  /*
    /                메인페이지           MainLayOut + Outlet(Home)
    /about           소개페이지           MainLayOut + Outlet(About)
    /menus           메뉴목록페이지       MainLayOut + Outlet(Menus)
    /menus/:id       메뉴상세페이지       MainLayOut + Outlet(MenusDetail)
    /menus/search    메뉴검색결과페이지   MainLayOut + Outlet(MenusSearchResult)
  */
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menus">
            <Route index element={<Menus />} />

            <Route path=":id" element={<MenuDetail />} />
            <Route path="search" element={<MenuSearchResult />} />
          </Route>
        </Route>
      </Routes> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
