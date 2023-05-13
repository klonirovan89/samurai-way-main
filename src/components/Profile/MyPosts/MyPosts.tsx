import React from 'react';
import {MyPostsPropsType} from '../../../redux/State';
import s from './MyPosts.module.css';
import Post from './Post/Post';

type MyPostsType = {
    posts: MyPostsPropsType[]
}

const MyPosts = (props:MyPostsType) => {

     let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

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