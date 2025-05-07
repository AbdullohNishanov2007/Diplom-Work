import React from 'react'

const videos = [
  {
    url: "https://www.youtube.com/embed/x_2QpLcRdeY",
    title: "Быстрое введение в Python, включая основы синтаксиса, условные операторы, циклы и функции.",
    description: "⏳ Длительность: 1 час 👀 Просмотры: 404 тыс."
  },
  {
    url: "https://www.youtube.com/embed/34Rp6KVGIEM",
    title: "Введение в Python, его преимущества, недостатки и основные сферы применения.",
    description: "⏳ Длительность: 5 минут 29 секунд 👀 Просмотры: 3 млн"
  },
  {
    url: "https://www.youtube.com/embed/xnL7WVw2e1A",
    title: "Основы Python, его применение и преимущества.",
    description: "⏳ Длительность: 16 минут 👀 Просмотры: 156 тыс."
  }
];


const Python = () => {
  return (
    <div className="min-h-screen py-10 px-4" style={{ backgroundColor: "#333", marginTop: '0px', padding: '0px' }}>
      <div className="Rract_h1" style={{ background: ' linear-gradient(to right,rgb(0, 140, 255),rgb(255, 200, 0)', height: '350px', width: '100%', marginTop:'0' }}>
        <h1 className="" style={{
          margin: '0', textAlign: 'center', fontSize: '60px', marginTop: '0px', padding: '50px',
          fontWeight: "bold", // жирный текст
          textAlign: "center", // по центру
          marginBottom: "3rem", // отступ снизу
          background: "linear-gradient(to right, #FFD43B 50% , #306998 52%", // градиент
          WebkitBackgroundClip: "text", // обрезать фон по форме текста
          WebkitTextFillColor: "transparent" // сделать сам текст прозрачным, чтобы был виден фон
        }} >Курс по Python</h1>
        <ul style={{
          width: '90%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', color: '#12608c', listStyleType: "none",
          background: "linear-gradient(to right, #FFD43B 50%, #306998  50%)",
          WebkitBackgroundClip: "text", // обрезать фон по форме текста
          WebkitTextFillColor: "transparent", // сделать сам текст прозрачным, чтобы был виден фон
          marginLeft: '30px'
        }}>
          <li style={{ padding: '15px' }} >🔵 3 видео</li>
          <li style={{ padding: '15px' }} >🔵 мах 2+ часов</li>
          <li style={{ padding: '15px' }} >🔵 мини 13+ минут </li>
          <li style={{ padding: '15px' }} >🔵 2 плейлист </li>
        </ul>
      </div>
      <div className="container" style={{ color: "#aaa9a9" }}>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ textAlign: 'center', marginTop:'0' }} >Уроки Python</h1>
        <div className="container flex flex-col gap-16 mx-auto " style={{ textAlign: 'center', marginTop:'0' }} >
          {videos.map((video, index) => (
            <div key={index} className="flex flex-col gap-4 items-center" style={{marginTop:'0'}} >
              <div className="w-full max-w-4xl aspect-video border-2 border-gray-500 rounded-xl overflow-hidden shadow-lg" style={{marginTop:'0'}}>
                <iframe
                  className="w-full h-full"
                  src={video.url}
                  title={`Урок ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: '5px', width: '400px', height: '250px', marginTop:'0' }}
                ></iframe>
              </div>
              <p className="text-xl md:text-2xl text-center font-semibold leading-relaxed" style={{ fontSize: '20px', marginTop:'0' }} >{video.title}</p>
              <p className="text-xl md:text-2xl text-center font-semibold leading-relaxed" style={{ fontSize: '20px', marginTop:'0' }} >{video.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Python
