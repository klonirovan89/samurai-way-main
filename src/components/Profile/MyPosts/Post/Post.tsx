import React from 'react';
import s from './Post.module.css';
import {arrMyPostsPropsType, myPostsPropsType} from "../../../../index";

const Post = (props:arrMyPostsPropsType) => {
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