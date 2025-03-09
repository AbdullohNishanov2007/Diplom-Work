// src/pages/VideoCourses.js
import React from 'react';
import './VideoCourses.css'; // Импортируем стили для страницы

const VideoCourses = () => {
    const courses = [
        {
            title: 'Курс по JavaScript',
            description: 'Изучите основы JavaScript и создайте свои первые веб-приложения.',
            link: 'https://example.com/javascript-course',
            image: 'https://itproger.com/img/courses/1476977754.jpg' // Замените на URL вашего изображения
        },
        {
            title: 'Курс по React',
            description: 'Углубитесь в React и научитесь создавать интерактивные пользовательские интерфейсы.',
            link: 'https://example.com/react-course',
            image: 'https://itproger.com/img/courses/x1494770683.jpg.pagespeed.ic.ovSnDXpXaC.webp' // Замените на URL вашего изображения
        },
        {
            title: 'Курс по Python',
            description: 'Научитесь программировать на Python и создавайте свои собственные проекты.',
            link: 'https://example.com/python-course',
            image: 'https://itproger.com/img/intensivs/python.svg' // Замените на URL вашего изображения
        },
        {
            title: 'Курс по HTML и CSS',
            description: 'Изучите основы веб-разработки с помощью HTML и CSS.',
            link: 'https://example.com/html-css-course',
            image: 'https://th.bing.com/th/id/OIP.jkucKKfidsEUxAOwrUyM1AHaFF?w=1024&h=703&rs=1&pid=ImgDetMain' // Замените на URL вашего изображения
        }
    ];

    return (
        <div className="courses-container">
            {courses.map((course, index) => (
                <div className="course-card" key={index}>
                    <img src={course.image} alt={course.title} className="course-image" />
                    <h1 className="course-title">{course.title}</h1>
                    <p className="course-description">{course.description}</p>
                    <a href={course.link} className="course-link" target="_blank" rel="noopener noreferrer">Посмотреть курс</a>
                </div>
            ))}
        </div>
    );
};

export default VideoCourses;