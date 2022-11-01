import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

export const Header = (props: any) => {
  return (
    <header className={s.header}>
      <img src="./img/logo.png" alt="" width={100} height={100} />
      <div className={s.loginBlock}>
        {props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>logout</button></div>
          : <NavLink to={'/login'}>login</NavLink>}
      </div>
    </header>
  );
};
