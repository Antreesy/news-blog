import React from "react";
import { Link } from "react-router-dom";

import { AuthStatus } from "../AuthStatus/AuthStatus";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__links-wrapper">
          <Link className="link header__link header__link_image" to="/">
            <img
              src={require("../../assets/profilance_logo.svg").default}
              alt="Logo"
            />
          </Link>
          <Link className="button button_primary" to="/news">
            Новости
          </Link>
        </div>
        <AuthStatus />
      </div>
    </header>
  );
};

export { Header };
