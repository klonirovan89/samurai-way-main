import React from 'react';
import s from './../Dialogs.module.css';
import {arrMessagePropsType} from "../../../index";


const Message = (props: arrMessagePropsType) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    );
}


export default Message