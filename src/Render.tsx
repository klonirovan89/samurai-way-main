import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {addPost, stateType} from "./redux/State";

export const rerenderEntireTree = (state:stateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById('root')
    );
}