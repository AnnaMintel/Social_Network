import React from "react";
import s from "./Post.module.css";

export type PostType = { 
  id?: number
  name?: string; 
  message: string; 
  likeCount: number; 
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
        <span>{props.likeCount}  likes </span>
      </div>
    </div>
  );
};
