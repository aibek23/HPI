import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Products from "./pages/Products";
import List from "./components/Admin/List/List";
import Add from "./components/Admin/Add/Add";
import Edit from "./components/Admin/Edit/Edit";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RequireAuth from "./components/Auth/RequireAuth";
import NoMatch from "./pages/NoMatch";
import Nayka from "./pages/nayka.jsx";
import Partners from "./pages/partners.jsx";
// import News from "./pages/news.jsx";
import Sotrudniki from "./pages/sotrudniki.jsx";
import Galery from "./pages/galery";
import Abitur from "./pages/abitur";
import ProdDetail from "./pages/ProdDetail";
import Chyndybaeva from "./pages/Chyndybaeva";
import Joldosheva from "./pages/Joldosheva";
import Akynbekova from "./pages/Akynbekova";
import Halanskaya from "./pages/Halanskaya";
import Asanakunov from "./pages/Asanakunov";
import Abdullaeva from "./pages/Abdullaeva";
import Moldosaeva from "./pages/Moldosaeva";
import Yugai from "./pages/Yugai";
import Mamytova from "./pages/Mamytova";
import Suiutbekova from "./pages/Suiutbekova";
import Mambetova from "./pages/Mambetova";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        >
          <Route index element={<List />} />
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
        <Route path="/news" element={<Products />} />
        <Route path="/products/detail/:prodId" element={<ProdDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NoMatch />} />
        <Route path="/nayka" element={<Nayka />} />
        <Route path="/abiturientam" element={<Abitur />} />
        <Route path="/sotrudniki" element={<Sotrudniki />} />
        {/* <Route path="/news" element={<News />} /> */}
        <Route path="/partners" element={<Partners />} />
        <Route path="/photogalery" element={<Galery />} />
        <Route
          path="/chandybaeva-ainura-mazhitovna"
          element={<Chyndybaeva />}
        />
        <Route
          path="/dzholdoshova-ainura-buudaiykovna"
          element={<Joldosheva />}
        />
        <Route
          path="/akynbekova-mederkul-bozgunchievna"
          element={<Akynbekova />}
        />
        <Route path="/mambetova-burul-zhumashevna" element={<Mambetova />} />
        <Route path="/khalanskaja-elena-sergeevna" element={<Halanskaya />} />
        <Route
          path="/asanakunov-zhoomart-shakenovich"
          element={<Asanakunov />}
        />
        <Route path="/abdullaeva-gulnara-mukashevna" element={<Abdullaeva />} />
        <Route
          path="/moldosanova-nurgul-duishshchenbekovna"
          element={<Moldosaeva />}
        />
        <Route path="/yugai-zhanna-kerimbekovna" element={<Yugai />} />
        <Route path="/mamytova-akylai-abdykaparovna" element={<Mamytova />} />
        <Route
          path="/suiutbekova-sabina-maralbekovna"
          element={<Suiutbekova />}
        />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
