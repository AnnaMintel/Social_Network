import React from "react";
import s from "./Post.module.css";

type PostType = { 
  name?: string;
  message: string;
  likeCounter: number;
}

export const Post = (props:PostType) => {
  return (
    <div className={s.item}>
      <img
        src="https://www.meme-arsenal.com/memes/134f55e2d4a0717c1f76193879fbccc1.jpg"
        alt=""
      />
     {props.name}: "{props.message}"
      <div> 
        <span>{props.likeCounter}  likes </span>
      </div>
    </div>
  );
};
