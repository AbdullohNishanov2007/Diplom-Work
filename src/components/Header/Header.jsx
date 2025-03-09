// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link для навигации
import './Header.css'; // Импортируем стили
import logo from '../assets/Logo.jpeg'; // Импортируем логотип
import BurgerMenu from '../BurgerMenu/BurgerMenu'; // Импортируем компонент бургер-меню

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        {/* Отображаем логотип */}
                        <img src={logo} className='Logo' alt="Логотип" />
                    </div>
                    <BurgerMenu /> {/* Добавляем бургер-меню */}
                    <nav className="nav">
                        <ul>
                            <li><Link to="/">Главная</Link></li>
                            <li><Link to="/about">О нас</Link></li>
                            <li><Link to="/services">Услуги</Link></li>
                            <li><Link to="/video-courses">Видеокурсы</Link></li> 
                            <li><Link to="/contact">Контакты</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;