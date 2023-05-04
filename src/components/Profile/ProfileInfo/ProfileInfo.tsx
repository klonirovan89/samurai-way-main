import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://bipbap.ru/wp-content/uploads/2017/08/vershini-6.jpg' alt="No photo"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>

    )
};

export default ProfileInfo