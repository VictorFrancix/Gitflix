import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './../pages/signin';
import {GlobalStyles} from './../styles/globalStyles.jsx';

export default function App(){
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<h1>teste</h1>} />
            </Routes>
        </BrowserRouter>
    );
}