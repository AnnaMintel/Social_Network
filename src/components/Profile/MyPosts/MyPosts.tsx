import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = (props: any) => {

  let postsElements = props.posts.map((p: any) =>
    <Post message={p.message} likeCounter={p.likeCounter} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    //@ts-ignore 
    let text = newPostElement.current.value;
    props.addPost(text);
    //@ts-ignore 
    newPostElement.current.value = ''; 
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          {/* @ts-ignore */}
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>

      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};
