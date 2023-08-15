import React from 'react'
import {useState} from 'react'
import "./Post.css"
import style from './Post.module.css'

const Post = ({ userId, id, title, body, isLoading }) => {

  return (
    <div className="wrapper">
      <div className={style.blockRed}>
        <h3>{id}</h3>
        <h2>{title}</h2>
        <div>{body}</div>
      </div>
    </div>
  );
};

export default Post;