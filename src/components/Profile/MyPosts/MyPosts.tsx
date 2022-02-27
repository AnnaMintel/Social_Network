import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {
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
        <Post name="Masha P" message="HI, how are you BRO?" likeCounter="20" />
        <Post name="Hanna " message="The weather was really bad" likeCounter="30" />
        <Post name="Vlad E" message="I can't find my glasses" likeCounter="50" />
      </div>
    </div>
  );
};
