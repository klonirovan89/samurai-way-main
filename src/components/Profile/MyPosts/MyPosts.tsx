import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'How are you?', likesCount: 15},
        {id: 1, message: 'It is my first post', likesCount: 11}
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
                <Post message={postsData[0].message} sumLike={postsData[0].likesCount}/>
                <Post message={postsData[1].message} sumLike={postsData[1].likesCount}/>
            </div>
        </div>
    )
};

export default MyPosts