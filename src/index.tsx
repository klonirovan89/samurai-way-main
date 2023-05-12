import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export type myPostsPropsType = {
    posts: arrMyPostsPropsType[]
}

export type arrMyPostsPropsType = {
    id: number,
    message: string,
    likesCount: number
}

export let posts = [
    {id: 1, message: 'How are you?', likesCount: 15},
    {id: 1, message: 'It is my first post', likesCount: 11}
]

export type DialogItemPropsType = {
    dialogs: arrDialogItemPropsType[]
}

export type arrDialogItemPropsType ={
    id: number,
    name: string
}

export let dialogs = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Viktor"},
    {id: 6, name: "Valera"}
]

export type MessagePropsType = {
    messages: arrMessagePropsType[]
}

export type arrMessagePropsType = {
    id: number,
    message: string
}

export let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your?"},
    {id: 3, message: "Yo"},
    {id: 4, message: "Yo"},
    {id: 5, message: "Yo"},
    {id: 6, message: "Yo"}
]

export type allPropsType = {
    posts: arrMyPostsPropsType[],
    dialogs: arrDialogItemPropsType[],
    messages: arrMessagePropsType[]
}

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
    document.getElementById('root')
);

