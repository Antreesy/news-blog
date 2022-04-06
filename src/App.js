import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { Layout } from "./components/Layout/Layout"
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/register" element={<RegisterPage />} /> */}
      </Routes>

    </Layout>
  );
}

export default App;
