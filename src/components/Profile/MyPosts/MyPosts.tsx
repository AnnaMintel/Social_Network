import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";


export const MyPosts = (props: any) => {

  let postsElements = props.posts.map((p: any) =>
    <Post message={p.message} likeCount={p.likeCount} />)

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    //@ts-ignore 
    let text = newPostElement.current.value;
    props.updateNewPostText();
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
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>

      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};
