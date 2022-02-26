import React from "react";
import s from "./Navbar.module.css"; // classes = s

export const Navbar = () => {
  return (
    <nav className={s.nav}>
       {/* if we are using several classes :   */}
      <div className={`${s.item} ${s.gold}`}>   
        <a href="/profile">Profile</a>
      </div>

      <div className={s.item}>
        <a href="/dialogs">Messages</a>
      </div>

      <div className={s.item}>
        <a href="/news">News</a>
      </div>

      <div className={s.item}>
        <a href="/music">Music</a>
      </div>

      <div className={s.item}>
        <a href="/settings">Settings</a>
      </div>
    </nav>
  );
};
