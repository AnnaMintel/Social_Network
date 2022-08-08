import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = (props: any) => {

  let postsElements = props.posts.map((p: any) =>
    <Post message={p.message} likeCounter={p.likeCounter} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: 'addPost' });
  };

  let onPostChange = () => {
    //@ts-ignore 
    let text = newPostElement.current.value;
    let action = { type: 'updateNewPostText', newText: text };
    props.dispatch(action);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          {/* @ts-ignore */}
          <textarea onChange={onPostChange} ref={newPostElement}
            value={props.newPostText} />
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
