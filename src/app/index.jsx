import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './../pages/signin';
import SignUp from './../pages/signup';
import {GlobalStyles} from './../styles/globalStyles.jsx';

export default function App(){
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}