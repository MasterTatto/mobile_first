import React from 'react';
import s from './style.module.css'
import Container from "../../common/container";
import ProfileHeader from "./profile_header";
import ProfileAction from "./profile_actions";

const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileHeader/>
            <ProfileAction/>
        </div>
    );
};

export default Profile;
