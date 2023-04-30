import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div>
                My posts
                 <div>
                    <textarea></textarea>
                     <button>Add post</button>
                </div>
                <div className={s.content}>
                    <Post message = 'How are you?' sumLike = {15}/>
                    <Post message = 'It is my first post' sumLike = {20}/>
                </div>
            </div>
    )
};

export default MyPosts