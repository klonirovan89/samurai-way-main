import React from 'react';
import s from './Post.module.css';
import {MyPostsPropsType} from "../../../../redux/State";

const Post = (props:MyPostsPropsType) => {
    return (
        <div className={s.item}>
            <img src='https://s0.rbk.ru/v6_top_pics/media/img/6/12/755809115374126.jpg' alt='No photo'/>
            {props.message}
            <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>
    )
};

export default Post