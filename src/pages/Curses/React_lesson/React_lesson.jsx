import React from "react";

const videos = [
  {
    url: "https://www.youtube.com/embed/kz23xxukY5s",
    description: "Урок 1: React JS c Нуля – ПОЛНЫЙ Курс для начинающих (2025)"
  },
  {
    url: "https://www.youtube.com/embed/is3T0W0ouT0",
    description: "Урок 2: React - Курс по React для Начинающих "
  },
  {
    url: "https://www.youtube.com/embed/SqcY0GlETPk",
    description: "Урок 3: Учебник по React для начинающих"
  },
  {
    url: "https://www.youtube.com/embed/GNrdg3PzpJQ",
    description: "Урок 4: React JS фундаментальный курс от А до Я"
  },
  {
    url: "https://www.youtube.com/embed/DLX62G4lc44",
    description: "Урок 5: Learn React JS - Full Course for Beginners - Tutorial 2019"
  }
];

export default function ReactLessons() {
  return (
    <div className="min-h-screen py-10 px-4" style={{ backgroundColor: "#333", marginTop:'0px', padding:'0px' }}>
      <div className="Rract_h1" style={{ backgroundColor:'#61dafb', height:'350px', width:'100%'}}>
        <h1 className="" style={{color:'#12608c', margin:'0', textAlign:'center', fontSize:'60px', marginTop:'0px', padding:'50px' }}>Курс по React</h1>
        <ul style={{width:'90%', display:'flex',justifyContent:'center', flexWrap:'wrap', color:'#12608c', listStyleType:"none"}}>
          <li style={{padding:'15px'}} >🔵 5 Уроков</li>
          <li style={{padding:'15px'}} >🔵 7+ часов обучения</li>
          <li style={{padding:'15px'}} >🔵 на английском 1</li>
          <li style={{padding:'15px'}} >🔵 на русском 4 </li>
        </ul>
      </div>
      <div className="container" style={{color: "#aaa9a9"}}>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{textAlign:'center'}} >Уроки по React</h1>
        <div className="container flex flex-col gap-16 mx-auto " style={{textAlign:'center'}} >
          {videos.map((video, index) => (
            <div key={index} className="flex flex-col gap-4 items-center">
              <div className="w-full max-w-4xl aspect-video border-2 border-gray-500 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src={video.url}
                  title={`Урок ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{borderRadius:'5px', width:'400px', height:'250px'}}
                ></iframe>
              </div>
              <p className="text-xl md:text-2xl text-center font-semibold leading-relaxed" style={{fontSize:'20px'}} >{video.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



