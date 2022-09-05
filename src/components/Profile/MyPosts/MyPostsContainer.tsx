import React from "react";
import { connect, useDispatch } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import { RootStateType } from "../../../redux/store";
import { MyPosts } from "./MyPosts";


// передача данных в коннект
let mapStateToProps = (state: RootStateType ) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

// передача функций в коннект
let mapDispatchToProps = (dispatch: any) => {
  return {
    updateNewPostText: (text: any) => {
      const action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
