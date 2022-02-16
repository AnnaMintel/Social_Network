import React from "react";
import s from "./Post.module.css";

export const Post = (props:any) => {

  return (
    <div className={s.item}>
      <img
        src="https://www.meme-arsenal.com/memes/134f55e2d4a0717c1f76193879fbccc1.jpg"
        alt=""
      />
     {props.name}, {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  );
};
