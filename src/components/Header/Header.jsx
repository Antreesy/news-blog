import React from "react";
import { AuthStatus } from "../AuthStatus/AuthStatus";

import c from "./header.module.scss"

const Header = () => {
    return (
        <header className={c.header}>
            <div className={c.container}>
                <h1 className={c.caption}>Profilance test task</h1>
                <AuthStatus />
            </div>
        </header>
    );
}

export {Header};