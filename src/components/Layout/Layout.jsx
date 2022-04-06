import React from "react";
import { Header } from "../Header/Header";

import c from "./layout.module.scss";

const Layout = (props) => {
  return (
    <div className={c.container}>
      <Header />
      {props.children}
    </div>
  );
};

export { Layout };
