import React, { useState, useEffect } from 'react';

const Un27Videos = [
  {
    url: "https://www.youtube.com/embed/jZL0Hh1Dc-M",  
    link: "https://www.youtube.com/embed/jZL0Hh1Dc-M",
    title: " Игра на Pygame с нуля / Урок #1 – Разработка игр на Python для начинающих ",
    description: "⏳ 6+ минут 👀 40+ тыс. просмотров"
  }
];

const Un27 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  const totalVideos = Un27Videos.length;
  const totalDuration = "6 минут";
  const totalViews = "40+ тыс.";

  return (
    <div style={{ backgroundColor: "rgb(47, 47, 47)", minHeight: '100vh', padding: '0' }}>
      <div style={{
        background: 'linear-gradient(to right,rgb(116, 0, 126),rgb(0, 174, 174), rgb(0, 103, 7), rgb(48, 0, 125), rgb(154, 90, 0), rgb(159, 156, 0), rgb(173, 0, 101))',
        height: '370px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
      }}>
        <h1 style={{
          fontSize: '64px', fontWeight: 'bold', textAlign: 'center', margin: '0',
          background: "linear-gradient(to right,rgb(193, 0, 210),rgb(0, 255, 255), rgb(0, 145, 10), rgb(98, 0, 255), rgb(255, 149, 0), rgb(255, 251, 0), rgb(255, 0, 149))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          игра на Python
        </h1>
        <ul style={{
          display: 'flex', gap: '20px', listStyleType: 'none', padding: '20px',
          color: 'white', fontWeight: '500', flexWrap: 'wrap', justifyContent: 'center'
        }}>
          <li>🎥 Видео: {totalVideos}</li>
          <li>⏳ Длительность: {totalDuration}</li>
          <li>👀 Просмотры: {totalViews}</li>
          <li>💻 Навык: Python</li>
        </ul>
      </div>

      <div style={{ color: "#eee", padding: '60px 20px' }}>
        <h2 style={{
            fontSize: '40px', 
            textAlign: 'center', 
            marginBottom: '50px',  
            background: "linear-gradient(to right,rgb(193, 0, 210),rgb(0, 255, 255), rgb(0, 145, 10), rgb(98, 0, 255), rgb(255, 149, 0), rgb(255, 251, 0), rgb(255, 0, 149))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
            }}>
                Создание игры на Python
            </h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '40px',
          justifyContent: 'center',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(50px)',
          transition: 'opacity 1s ease, transform 1s ease'
        }}>
          {Un27Videos.map((video, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                width: '350px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
                backgroundColor: '#1f1f1f',
                borderRadius: '15px',
                boxShadow: hoveredIndex === index
                  ? '0 8px 30px rgb(204, 0, 255)'
                  : '0 4px 15px rgb(18, 210, 0)',
                transform: hoveredIndex === index ? 'scale(1.03)' : 'scale(1)',
                transition: 'all 0.4s ease'
              }}
            >
              <div style={{ width: '100%', height: '200px', overflow: 'hidden', borderRadius: '10px' }}>
                <iframe
                  src={video.url}
                  title={`Урок ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: '100%', height: '100%' }}
                ></iframe>
              </div>
              <p style={{ fontSize: '22px', fontWeight: 'bold', marginTop: '15px' }}>{video.title}</p>
              <p style={{ fontSize: '16px', marginTop: '10px', color: '#ccc' }}>{video.description}</p>
              <a href={video.link} target="_blank" rel="noopener noreferrer" style={{
                marginTop: '15px',
                padding: '10px 20px',
                backgroundColor: hoveredIndex === index ? 'rgb(174, 0, 255)' : 'rgb(0, 210, 32)',
                color: 'black',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                transition: 'background-color 0.3s ease'
              }}>
                Смотреть на YouTube
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Un27;