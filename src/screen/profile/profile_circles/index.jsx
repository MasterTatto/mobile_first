import React from 'react';
import s from './style.module.css'

const Circles = ({item, title}) => {
    return (
        <div className={s.circle_wrapper}>
            <div className={s.circle}>
                <img src={item} alt="" className={s.circle__item}/>
            </div>
            <p>{title}</p>
        </div>);
};

export default Circles;
