import React from 'react';
import s from './style.module.css'
import bg from '../../../assests/bg.png'
import user from '../../../assests/svg/Photo.png'
import edit from '../../../assests/svg/profile/edit.svg'
import alert from '../../../assests/svg/profile/alert.svg'
import qr from '../../../assests/svg/profile/QR.svg'
import line from "../../../assests/Layer 10.png";

const ProfileHeader = () => {
    return (
        <div className={s.profile_header}
             style={{background: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <img src={line} alt="" className={s.line_header}/>
            <div className={s.profile_header__content}>
                <img className={s.profile__img} src={user} alt=""/>
                <div className={s.profile__info}>
                    <div className={s.profile_info__item}>
                        <img src={edit} alt="" className={s.edit}/>
                        <h2>RUBY_N</h2>
                    </div>

                    <div className={s.profile_info__item}>
                        <p>18 FOLLOWERS</p>
                    </div>

                    <div className={s.line}/>
                    <div className={s.profile_info__item}>
                        <img src={edit} alt="" className={s.edit}/>
                        <p>EDITE PROFILE</p>
                    </div>
                    <div className={s.profile_info__item}>
                        <img src={edit} alt="" className={s.edit}/>
                        <p>EDITE BANNER</p>
                    </div>


                </div>
                <div className={s.profile__icons}>
                    <img src={alert} alt=""/>
                    <img src={qr} alt=""/>
                </div>
            </div>

        </div>);
};

export default ProfileHeader;
