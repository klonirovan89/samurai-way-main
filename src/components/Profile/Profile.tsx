import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
           <div>
               <img src='https://bipbap.ru/wp-content/uploads/2017/08/vershini-6.jpg' alt="No photo"/>
           </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
};

export default Profile