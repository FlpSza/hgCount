import React, { useState, useEffect } from 'react';
import './App.css';
import background from './img/background.jpg';

const App = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date('2025-01-10T00:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <h1>Nosso website está em construção</h1>
      <p>Estará disponível para o acesso em:</p>
      <div className="timer">
        <div className="time-box">
          <span>{String(timeLeft.days).padStart(2, '0')}</span>
          <span>DIAS</span>
        </div>
        <span className="colon">:</span>
        <div className="time-box">
          <span>{String(timeLeft.hours).padStart(2, '0')}</span>
          <span>HORAS</span>
        </div>
        <span className="colon">:</span>
        <div className="time-box">
          <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span>MINUTOS</span>
        </div>
        <span className="colon">:</span>
        <div className="time-box">
          <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span>SEGUNDOS</span>
        </div>
      </div>
      <div className='textos'>
        <p>Você ainda pode ficar por dentro das</p>
        <p>promoções da Higo, faça seu cadastro!</p>
      </div>
      <div className="actions">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
          <a href="https://tiktok.com" target="_blank"><i className="fab fa-tiktok"></i></a>
        </div>
        <img src="/logoHiga.png" alt="Imagem Pequena" />
        <button className='btn'>Cadastro</button>
      </div>
    </div>
  );
};

export default App;
