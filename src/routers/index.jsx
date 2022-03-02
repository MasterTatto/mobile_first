import React from 'react';
import {
    Routes,
    Route
} from "react-router-dom";
import Profile from "../screen/profile";

const Routers = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Profile/>}/>
        </Routes>
    );
};

export default Routers;
