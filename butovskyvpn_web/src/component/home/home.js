import React from 'react';
import { Link } from 'react-router-dom';
import './home_style.css'; 
import logo from './logo.png';
import Phone from './phone.png';
import Phone2 from './phone2.png';
import Body from './body2.png'

function Home() {
  return (
    <div className="home-container">
      <div className='home_main'>
        <div className='home_main-head'>
          <img src={logo} alt="Логотип компании" className="home-logo" />
          <div className='home_main-head_mini'>
            <h3>О нас</h3>
            <h3>Проекты и преимущества</h3>
            <h3>Поддержка</h3>
          </div>
          <div className='home_main-head_mini_translation'>
            <div className='home_main-head_mini_translation_RU'>
              <h2>RU</h2>
            </div>
            <div className='home_main-head_mini_translation_EN'>
              <h2>EN</h2>
            </div>
          </div>
          <div className='home_main-head_mini_login'>
            <button>Личный кабинет</button>
          </div>
        </div>
        <div className='home_main_information'>
          <div className='home_main_information-left_container'>
            <h1>Butovsky — IT-экосистема для ваших digital-проектов и путешествий</h1>
            <p>Путешествуйте, используйте безопасную сеть, разворачивайте свои проекты!</p>
            <div className='home_main_information-left_container-get_start'>
              <button>Подключить</button>
            </div>
          </div>
          <div className='home_main_information-right_container'>
            <img src={Phone} alt="Логотип компании" className="home-phone" />
          </div>
        </div>
      </div>

      <div className='home-mini-info'>
        <div className='home-mini-info-left'>
          <i class='bx bx-info-circle'></i>
          <h1>Все популярные технологии в одном решении</h1>
        </div>
        <div className='home-mini-info-right'>
          <img src={Phone2} alt="Логотип компании" className="home-phone2" />
        </div>
      </div>

      {/* Projects Section */}
      <div className='home-all_projects'>
        <div className='home-all_projects-head'>
          <h1>Наши проекты</h1>
        </div>
        <div className='home-all_projects-head-projects'>
          <div className='home-all_projects-head-projects_container'>
            <h2><i className='bx bx-network-chart'></i> VPN</h2>
            <h3><i class='bx bx-check'></i> Шифрование вашего IP</h3>
            <h3><i class='bx bx-check'></i> Поддержка 24/7</h3>
            <h3><i class='bx bx-check'></i> Подключение 30 устройств</h3>
            <button>Открыть</button>
          </div>
          <div className='home-all_projects-head-projects_container'>
            <h2><i className='bx bx-server'></i> HOST</h2>
            <h3><i class='bx bx-check'></i> Аренда серверов под разные задачи</h3>
            <h3><i class='bx bx-check'></i> Подключение по SSH</h3>
            <h3><i class='bx bx-check'></i> Выгодные цены</h3>
            <h3><i class='bx bx-check'></i> Помощь с настройкой</h3>
            <button>Открыть</button>
          </div>
          <div className='home-all_projects-head-projects_container'>
            <h2><i className='bx bx-memory-card'></i> E-SIM</h2>
            <h3><i class='bx bx-check'></i> Поддержка более 100 стран</h3>
            <h3><i class='bx bx-check'></i> На 60% Дешевле Роуминга</h3>
            <h3><i class='bx bx-check'></i> Помощь с подключением</h3>
            <button>Открыть</button>
          </div>
        </div>
      </div>

      <div className='home-butovsky_project_info'>
        <img src={Body} alt="Логотип компании" className="body_butovsky" />
      </div>
      
      <div className='home-main_info-container'>
    <div className='home-main_info-left'>
      <img src={logo} alt="Логотип компании" className="home-logo" />
    </div>
    
    <div className='home-main_info-right'>
      <div className='navigation-column'>
        <h3>Проекты</h3>
        <ul>
          <li><a href="#tariffs"><i class='bx bx-network-chart' ></i> VPN</a></li>
          <li><a href="#ecommerce"><i class='bx bx-server' ></i> HOST</a></li>
          <li><a href="#ecommerce"><i class='bx bx-memory-card'></i> E-SIM</a></li>
        </ul>
      </div>
      
      <div className='support-column'>
        <h3>Поддержка</h3>
        <ul>
          <li><a href="#contacts">Канал</a></li>
          <li><a href="#consultation">Чат с поддержкой</a></li>
        </ul>
      </div>
    </div>
  </div>
    </div>
  );
}

export default Home;