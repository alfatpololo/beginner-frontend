import React from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../Views/Login";
import Landing from "../Views/Landing";
import Profile from "../Views/Profile";
import Register from "../Views/Register";
import Forget from "../Views/Forget";
import Add from "../Views/Addrecipe";
import Detail from "../Views/Detailrecipe";
import Video from "../Views/Videorecipe";
import Update from "../Views/Updaterecipe";

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<Landing/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/forget" element={<Forget/>}/>
                <Route path="/add" element={<Add/>}/>
                <Route path="/detail" element={<Detail/>}/>
                <Route path="/video" element={<Video/>}/>
                <Route path="recipe/update/:id" element={<Update/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;