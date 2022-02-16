import React from "react";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <img src="./img/logo.png" alt="" width={100} height={100} />
    </header>
  );
};
