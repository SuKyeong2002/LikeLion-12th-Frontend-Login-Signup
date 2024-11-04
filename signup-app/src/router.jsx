import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Redirection from './components/Redirection';
const AppRouter = ({ }) => {
    return (
        <Routes>
            <Route exact path='/kakao/callback' element={<Redirection />} />
        </Routes>
    )
};

export default AppRouter;