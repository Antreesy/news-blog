import React from "react";
import { Link } from "react-router-dom";
import { AuthStatus } from "../AuthStatus/AuthStatus";

import c from "./header.module.scss"

const Header = () => {
    return (
        <header className={c.header}>
            <div className={c.container}>
                <Link className={c.link} to='/'>
                    <img src={require('../../assets/profilance_logo.svg').default} alt="Logo" />
                </Link>
                <Link className={c.link} to='/news'>
                    Новости
                </Link>
                <AuthStatus />
            </div>
        </header>
    );
}

export {Header};