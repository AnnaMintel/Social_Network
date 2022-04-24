import React from "react";
import s from "./MyPosts.module.css"; 
import { Post } from "./Post/Post";

export const MyPosts = (props: any) => {
  
    let postsElements = props.posts.map((p:any) => <Post message={p.message} likeCounter={p.likeCounter} />)

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
