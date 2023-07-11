import React from 'react';
import {addPost, MyPostsPropsType} from '../../../redux/State';
import s from './MyPosts.module.css';
import Post from './Post/Post';

type MyPostsType = {
    posts: MyPostsPropsType[]
    addPost: (postMessage: string) => void;
    newPostText: string
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        let text:any = newPostElement.current?.value
        props.addPost(text)
    }

    const onPostChange = () => {

    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts