import React from 'react';
import './index.css';
import {state, subscriber} from "./redux/State";
import ReactDOM from "react-dom";
import App from "./App";
import {addPost, stateType, updateNewPostText} from "./redux/State";

const rerenderEntireTree = (state:stateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state);

subscriber(rerenderEntireTree)
