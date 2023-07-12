import React from 'react';
import './index.css';
import {store} from "./redux/State";
import ReactDOM from "react-dom";
import App from "./App";
import {stateType} from "./redux/State";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state:stateType) => {
    ReactDOM.render(
        <BrowserRouter>
        <App
            state={state}
            addPost={store.addPost.bind(store)}
            updateNewPostText={store.updateNewPostText.bind(store)}
        />,
        </BrowserRouter>, document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());

store.subscriber(rerenderEntireTree)
