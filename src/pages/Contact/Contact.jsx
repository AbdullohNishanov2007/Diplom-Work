// src/pages/Contact.js
import React from 'react';
import './Contact.css'; // Импортируем стили для страницы
import teleg from '../../components/assets/teleg.png'
import inst from '../../components/assets/inst.png'
import Fbook from '../../components/assets/Fbook.png'

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Контакты</h1>
            <p>Мы всегда рады помочь вам! Свяжитесь с нами любым удобным для вас способом.</p>
            
            <h2>Наши контактные данные</h2>
            <ul>
                <li><strong>Адрес:</strong> Бишкек, компания - имя компании</li>
                <li><strong>Телефон:</strong> +996 (234) 567-89-00</li>
                <li><strong>Электронная почта:</strong> info@yourcompany.com</li>
            </ul>

            <h2>Форма обратной связи</h2>

            <img className='img_c' src={teleg} alt="" />
            <img className='img_c' src={inst} alt="" />
            <img className='img_c' src={Fbook} alt="" />
            
        </div>
    );
};

export default Contact;