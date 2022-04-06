import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { NewsPage } from "./pages/NewsPage/NewsPage";
import { Layout } from "./components/Layout/Layout";
import { Dialog } from "./components/Dialog/Dialog";
import { AuthDialog } from "./components/Dialog/AuthDialog/AuthDialog";

const App = () => {
  const store = useSelector((state) => {
    return { auth: state.auth };
  });

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>

      {store.auth.isOpen && (
        <Dialog>
          <AuthDialog />
        </Dialog>
      )}
    </Layout>
  );
};

export { App };
