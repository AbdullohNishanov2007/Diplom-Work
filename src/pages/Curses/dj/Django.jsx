import React, { useState } from 'react';

const videos = [
    {
        url: "https://www.youtube.com/embed/F5mRW0jo-U4",
        title: "Полный курс Django для начинающих: разработка сайта с нуля.",
        description: "⏳ Длительность: 6 часов 20 минут 👀 Просмотры: 1.2 млн"
    },
    {
        url: "https://www.youtube.com/embed/rHux0gMZ3Eg",
        title: "Быстрое введение в Django: создание простого веб-приложения.",
        description: "⏳ Длительность: 1 час 👀 Просмотры: 580 тыс."
    },
    {
        url: "https://www.youtube.com/embed/UmljXZIypDc",
        title: "Django для начинающих: создание блога за 30 минут.",
        description: "⏳ Длительность: 30 минут 👀 Просмотры: 420 тыс."
    },
    {
        url: "https://www.youtube.com/embed/c708Nf0cHrs",
        title: "Продвинутый Django: создание интернет-магазина.",
        description: "⏳ Длительность: 5 часов 👀 Просмотры: 210 тыс."
    }
];

const Django = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="min-h-screen py-10 px-4" style={{ backgroundColor: "#333", marginTop: '0px', padding: '0px' }}>
            <div className="Rract_h1" style={{ background: 'linear-gradient(to right, rgb(0, 140, 255), rgb(255, 200, 0))', height: '350px', width: '100%', marginTop: '0' }}>
                <h1 style={{
                    margin: '0', textAlign: 'center', fontSize: '60px', padding: '50px',
                    fontWeight: "bold",
                    background: "linear-gradient(to right, #FFD43B 50%, #306998 52%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                    Курс по Django
                </h1>
                <ul style={{
                    width: '90%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', color: '#12608c', listStyleType: "none",
                    background: "linear-gradient(to right, #FFD43B 50%, #306998 50%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginLeft: '30px'
                }}>
                    <li style={{ padding: '15px' }}>🔵4 Уроков</li>
                    <li style={{ padding: '15px' }}>🔵 max 6+ ч</li>
                    <li style={{ padding: '15px' }}>🔵 мини 30м</li>
                </ul>
            </div>

            <div style={{ color: "#aaa9a9" }}>
                <h1 style={{ textAlign: 'center', fontSize: '40px', marginTop: '30px' }}>
                    Уроки Django
                </h1>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', alignItems: 'center', marginTop: '50px' }}>
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                transition: 'transform 0.3s ease', // плавный переход
                                transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)', // увеличение при наведении
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div style={{
                                width: '400px',
                                height: '250px',
                                overflow: 'hidden',
                                borderRadius: '10px',
                                border: '2px solid gray',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.5)'
                            }}>
                                <iframe
                                    src={video.url}
                                    title={`Урок ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{ width: '100%', height: '100%' }}
                                ></iframe>
                            </div>
                            <p style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '20px', color: '#ffffff' }}>{video.title}</p>
                            <p style={{ fontSize: '18px', marginTop: '10px', color: '#cccccc' }}>{video.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Django;

