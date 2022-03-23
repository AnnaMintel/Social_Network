import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {

  let postsData = [
    {message: 'HI, how are you BRO?', likeCounter: 20}, 
    {message: 'The weather was really bad', likeCounter: 30},
    {message: 'I can\'t find my glasses', likeCounter: 54}
]

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
        <Post message={postsData[0].message} likeCounter={postsData[0].likeCounter} />
        <Post message={postsData[1].message} likeCounter={postsData[1].likeCounter} />
        <Post message={postsData[2].message} likeCounter={postsData[2].likeCounter} />
        
        
      </div>
    </div>
  );
};
