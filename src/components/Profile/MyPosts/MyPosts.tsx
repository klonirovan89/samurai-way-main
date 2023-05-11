import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

export type myPostsPropsType = {
    id: number,
    message: string,
    likesCount: number
}

const MyPosts = (props:any) => {

    let posts = [
        {id: 1, message: 'How are you?', likesCount: 15},
        {id: 1, message: 'It is my first post', likesCount: 11}
    ]

    let postsElements = posts.map(p => <Post message={p.message} sumLike={p.likesCount}/>)

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
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts