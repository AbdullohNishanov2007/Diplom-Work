// src/components/BurgerMenu.js
import React, { useState } from 'react';
import './BurgerMenu.css'; // Импортируем стили для бургер-меню

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="burger-menu">
            <div className="burger-icon" onClick={toggleMenu}>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
            </div>
            {isOpen && (
                <nav className="menu">
                    <ul>
                        <li><a href="/">Главная</a></li>
                        <li><a href="/about">О нас</a></li>
                        <li><a href="/services">Услуги</a></li>
                        <li><a href="/video-courses">Видеокурсы</a></li>
                        <li><a href="/contact">Контакты</a></li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default BurgerMenu;

