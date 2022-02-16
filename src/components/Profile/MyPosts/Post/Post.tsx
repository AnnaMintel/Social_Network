import React from "react";
import s from "./Post.module.css";

export const Post = () => {
  return (
    <div className={s.item}>
      <img
        src="https://www.meme-arsenal.com/memes/134f55e2d4a0717c1f76193879fbccc1.jpg"
        alt=""
      />
      Post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};
