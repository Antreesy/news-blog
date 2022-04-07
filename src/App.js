import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { MainPage } from "./pages/MainPage/MainPage";
import { NewsPage } from "./pages/NewsPage/NewsPage";
import { Layout } from "./components/Layout/Layout";

import { Dialog } from "./components/Dialog/Dialog";
import { AuthDialog } from "./components/Dialog/AuthDialog/AuthDialog";
import { NewsDialog } from "./components/Dialog/NewsDialog/NewsDialog";

const App = () => {
  const store = useSelector((state) => {
    return { modal: state.modal };
  });

  return (
    <Layout>
      <main className="main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </main>

      {(store.modal.isAuthOpen || store.modal.isNewsOpen) && (
        <Dialog>
          {store.modal.isAuthOpen && <AuthDialog />}
          {store.modal.isNewsOpen && <NewsDialog />}
        </Dialog>
      )}
    </Layout>
  );
};

export { App };
