// src/pages/Services.js
import React from 'react';
import './Services.css'; // Импортируем стили для страницы

const Services = () => {
    return (
        <div className="services-container">
            <h1>Наши Услуги</h1>
            <p>
                Мы предлагаем широкий спектр образовательных услуг, чтобы помочь вам достичь ваших целей. Вот некоторые из наших основных услуг:
            </p>
            <ul>
                <li>
                    <h2>Курсы по подготовке к экзаменам</h2>
                    <p>Мы предлагаем курсы, которые помогут вам подготовиться к различным экзаменам, включая SAT, ACT, GRE и другие.</p>
                </li>
                <li>
                    <h2>Онлайн-курсы и вебинары</h2>
                    <p>Наши онлайн-курсы позволяют вам учиться в удобное для вас время и в любом месте.</p>
                </li>
                <li>
                    <h2>Индивидуальные занятия с преподавателями</h2>
                    <p>Мы предлагаем индивидуальные занятия, которые помогут вам сосредоточиться на ваших конкретных потребностях и целях.</p>
                </li>
                <li>
                    <h2>Программы повышения квалификации</h2>
                    <p>Наши программы повышения квалификации помогут вам развить новые навыки и улучшить вашу карьеру.</p>
                </li>
            </ul>
        </div>
    );
};

export default Services;