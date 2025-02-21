import React from "react";
import {
    Route,
    Routes,
    HashRouter,
} from "react-router-dom";

import Genesis from "../pages/Genesis";
import Header from "./Header";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Profile from "../pages/Profile.js";
import ProtectedRoute from "../routes/ProtectedRoute";
import NotFound from "../pages/NotFound";


const WebPage = () => {
    return (
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Genesis />} />
                <Route path="/register" element={<Register />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/home" element={<Home />} />               
                    <Route path="/profile" element={<Profile />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    );
}

export default WebPage;
