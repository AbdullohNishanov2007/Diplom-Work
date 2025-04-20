// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'; // ваш компонент главной страницы
import NotFound from './components/NotFound'; // импортируем компонент 404
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Services from './pages/Services/Services'
import VideoCourses from './pages/VideoCourses/VideoCourses';
import Js from './pages/Curses/Js/Js';
import '../src/App.css'

const App = () => {
    return (
        <div className='app'>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/video-courses" element={<VideoCourses />} />
                    <Route path="/js" element={<Js />} />

                    {/* Маршрут для страницы 404 */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default App;





