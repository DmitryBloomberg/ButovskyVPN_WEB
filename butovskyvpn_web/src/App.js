import React from 'react';
// Импортируем необходимые компоненты для роутинга (React Router v6)
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Импортируем компонент Home из указанной вами папки
import Home from './component/home/home.js';

function App() {
  return (
    // Оборачиваем все приложение в BrowserRouter
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;