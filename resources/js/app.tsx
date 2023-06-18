import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../css/app.css"
import { Provider } from 'react-redux';
import store from './redux/store';

import setAuthToken from "./redux/utils/setauthtoken";
import Add from "./pages/Add_crewing";
import Crewing from "./pages/Crewing";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Login from "./pages/Login";
import Term from "./pages/Term";


const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);

if (localStorage.getItem('token')) {
    // setAuthToken set the x-auth-token to the header with axios, like we do in postman
    setAuthToken(localStorage.getItem('token'));
}
export default function App() {
    return (
        <Provider store={store}>
            <div className="app-container">
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Crewing />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/about_project" element={<About />} />
                        <Route path="/term" element={<Term />} />
                        <Route path="/add_crewing" element={<Add />} />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </div>
        </Provider>
    );
}
