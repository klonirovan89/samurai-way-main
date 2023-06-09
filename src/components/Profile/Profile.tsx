import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePropsType} from "../../redux/State";


const Profile = (props: profilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts.posts}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
};

export default Profile