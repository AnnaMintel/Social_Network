import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {
  return (
    <div>
      <div>
        My POsts
        <div>new posts</div>
        <textarea></textarea>
        <button>Add post</button>
      </div>

      <div className={s.posts}>
        <Post name="Masha P" message="HI, how are you BRO?" />
        <Post name="Hanna " message="The weather was really bad"  />
        <Post name="Vlad E" message="I can't find my glasses"  />
      </div>
    </div>
  );
};
