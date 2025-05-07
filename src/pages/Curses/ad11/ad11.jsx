import React, { useState, useEffect } from 'react';

const adaptiveVideos = [
    {
      url: "https://www.youtube.com/embed/10LXK5wXi0A",
      link: "https://www.youtube.com/embed/10LXK5wXi0A",
      title: "Основы адаптивного дизайна",
      description: "⏳ 7 минут 👀 42 тыс. просмотров"
    }
  ];
  
  const AdaptiveLessons = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      setTimeout(() => setVisible(true), 300);
    }, []);
  
    const totalVideos = adaptiveVideos.length;
    const totalDuration = "7 минут";
    const totalViews = "42 тыс.";
  
    return (
      <div style={{ backgroundColor: "rgb(47, 47, 47)", minHeight: '100vh', padding: '0' }}>
        <div style={{
          background: 'linear-gradient(to right,rgb(81, 74, 73),rgb(150, 150, 150))',
          height: '370px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
        }}>
          <h1 style={{
            fontSize: '64px', fontWeight: 'bold', textAlign: 'center', margin: '0',
            background: "linear-gradient(to right,rgb(171, 171, 171),rgb(255, 255, 255))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Уроки Адаптивки
          </h1>
          <ul style={{
            display: 'flex', gap: '20px', listStyleType: 'none', padding: '20px',
            color: 'white', fontWeight: '500', flexWrap: 'wrap', justifyContent: 'center'
          }}>
            <li>🎥 Видео: {totalVideos}</li>
            <li>⏳ Длительность: {totalDuration}</li>
            <li>👀 Просмотры: {totalViews}</li>
            <li>💻 Навык: Адаптивный дизайн</li>
          </ul>
        </div>
  
        <div style={{ color: "#eee", padding: '60px 20px' }}>
          <h2 style={{ fontSize: '40px', textAlign: 'center', marginBottom: '50px' }}>Лучшие уроки по Адаптивному дизайну</h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            justifyContent: 'center',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(50px)',
            transition: 'opacity 1s ease, transform 1s ease'
          }}>
            {adaptiveVideos.map((video, index) => (
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
                    ? '0 8px 30px rgba(255, 215, 0, 0.7)'
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
                  backgroundColor: hoveredIndex === index ? '#ffd700' : '#ffa500',
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
  
  export default AdaptiveLessons;
  