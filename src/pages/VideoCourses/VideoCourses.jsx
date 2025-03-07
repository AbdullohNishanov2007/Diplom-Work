// src/pages/VideoCourses.js
import React from 'react';
import './VideoCourses.css'; // Импортируем стили для страницы

const VideoCourses = () => {
    const courses = [
        {
            title: 'Курс по JavaScript',
            description: 'Изучите основы JavaScript и создайте свои первые веб-приложения.',
            link: 'https://youtu.be/nCgFdChjnds?si=PK3aTj9A2iKKHard'
        },
        {
            title: 'Курс по React',
            description: 'Углубитесь в React и научитесь создавать интерактивные пользовательские интерфейсы.',
            link: 'https://youtu.be/nCgFdChjnds?si=PK3aTj9A2iKKHard'
        },
        {
            title: 'Курс по Python',
            description: 'Научитесь программировать на Python и создавайте свои собственные проекты.',
            link: 'https://youtu.be/nCgFdChjnds?si=PK3aTj9A2iKKHard'
        },
        {
            title: 'Курс по HTML и CSS',
            description: 'Изучите основы веб-разработки с помощью HTML и CSS.',
            link: 'https://youtu.be/nCgFdChjnds?si=PK3aTj9A2iKKHard'
        }
    ];

    return (
        <div className="video-courses-container">
            <h1>Наши Видеокурсы</h1>
            <p>
                Мы предлагаем разнообразные видеокурсы, которые помогут вам развить новые навыки и улучшить ваши знания. Вот некоторые из наших курсов:
            </p>
            <ul>
                {courses.map((course, index) => (
                    <li key={index}>
                        <h2>{course.title}</h2>
                        <p>{course.description}</p>
                        <a href={course.link} target="_blank" rel="noopener noreferrer">Посмотреть курс</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VideoCourses;