import React, { useState, useEffect } from 'react';

const videos = [
  {
    url: "https://www.youtube.com/embed/kUMe1FH4CHE",
    link: "https://www.youtube.com/watch?v=kUMe1FH4CHE",
    title: "HTML за 1 час — Основы верстки сайта",
    description: "⏳ 1 час 👀 1.5 млн просмотров"
  },
  {
    url: "https://www.youtube.com/embed/SpCUuyZZTp8",
    link: "https://www.youtube.com/watch?v=SpCUuyZZTp8",
    title: "Адаптивная верстка сайта с нуля",
    description: "⏳ 2 часа 👀 860 тыс. просмотров"
  }
];

const WebDesign = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  const totalVideos = videos.length;
  const totalDuration = "3+ часа";
  const totalViews = "2.3 млн+";

  return (
    <div style={{ backgroundColor: "#1a1a1a", minHeight: '100vh', padding: '0' }}>
      <div style={{
        background: 'linear-gradient(to right, #0F2027, #203A43, #2C5364)',
        height: '350px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
      }}>
        <h1 style={{
          fontSize: '60px', fontWeight: 'bold', textAlign: 'center', margin: '0',
          background: "linear-gradient(to right, #00c6ff, #0072ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          Вёрстка сайта
        </h1>
        <ul style={{
          display: 'flex', gap: '20px', listStyleType: 'none', padding: '20px',
          color: 'white', fontWeight: '500', flexWrap: 'wrap', justifyContent: 'center'
        }}>
          <li>🎥 Видео: {totalVideos}</li>
          <li>⏳ Длительность: {totalDuration}</li>
          <li>👀 Просмотры: {totalViews}</li>
          <li>📚 Формат: Практика + Теория</li>
        </ul>
      </div>

      <div style={{ color: "#eee", padding: '60px 20px' }}>
        <h2 style={{ fontSize: '40px', textAlign: 'center', marginBottom: '50px' }}>Уроки по вёрстке сайта</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '40px',
          justifyContent: 'center',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(50px)',
          transition: 'opacity 1s ease, transform 1s ease'
        }}>
          {videos.map((video, index) => (
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
                backgroundColor: '#2c2c2c',
                borderRadius: '15px',
                boxShadow: hoveredIndex === index
                  ? '0 8px 30px rgba(0, 140, 255, 0.7)'
                  : '0 4px 15px rgba(0, 0, 0, 0.5)',
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
                backgroundColor: hoveredIndex === index ? '#00c6ff' : '#0072ff',
                color: 'white',
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

export default WebDesign;




