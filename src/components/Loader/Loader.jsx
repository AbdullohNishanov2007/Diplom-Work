import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = ({ onLoaded }) => {
  const [loadingText, setLoadingText] = useState('Загрузка...');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onLoaded && typeof onLoaded === 'function') {
        onLoaded(); // Сообщаем, что загрузка завершена
      } else {
        console.error('onLoaded is not a function');
      }
    }, 2500); // Загрузка длится 2.5 секунды

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className="loader">
      <h1>Добро пожаловать на сайт!</h1>
      <p>{loadingText}</p>
    </div>
  );
};

export default Loader;

