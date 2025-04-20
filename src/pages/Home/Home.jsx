// src/pages/Home.js
import React from 'react';
import './Home.css'; // Импортируем стили для страницы
import home_container_img from '../../components/assets/home-container-img.png'

const Home = () => {
  return (
    <div className="home-container">
      <div className="header_container_block">
        <div className="home-container-left">
          <h1 className='home-container-left-h1'>
            <span className='title'>
              Онлайн-школа
            </span><br />
            <span className='title'>
              IT профессий
            </span>
          </h1>
          <p>
            <span className='title'>
              Обучаем веб программированию, созданию игр и <br />
            </span>
            <span className='title'>
              разработке ПО. Проходите курсы, решайте задачи,  <br />
            </span>
            <span className='title'>
              просматривайте новости и становитесь  <br />
            </span>
            <span className='title'>
              настоящими мастерами программирования!
            </span>
          </p>
          <a href="/video-courses" className="home-container-left-button"><span className='title'>Посмотреть курсы → 👉</span></a>
        </div>
        <div className="home-container-right">
          <img className='home_container_img' src={home_container_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
