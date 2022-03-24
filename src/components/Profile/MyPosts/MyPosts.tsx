import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {

  let postsData = [
    { id: 1, message: 'HI, how are you BRO?', likeCounter: 20 },
    { id: 2, message: 'The weather was really bad', likeCounter: 30 },
    { id: 3, message: 'I can\'t find my glasses', likeCounter: 54 },
    { id: 2, message: 'The weather was really bad', likeCounter: 30 },
    { id: 3, message: 'I can\'t find my glasses', likeCounter: 54 }
  ]
  
    let postsElements = postsData
      .map(p => <Post message={p.message} likeCounter={p.likeCounter} />)

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>

      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  );
};
