import React from "react";
import s from "./Navbar.module.css"; // classes = s

export const Navbar = () => {
  return (
    <nav className={s.nav}>
       {/* if we are using several classes :   */}
      <div className={`${s.item} ${s.gold}`}>   
        <a>Profile</a>
      </div>

      <div className={s.item}>
        <a>Messages</a>
      </div>

      <div className={s.item}>
        <a>News</a>
      </div>

      <div className={s.item}>
        <a>Music</a>
      </div>

      <div className={s.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};
