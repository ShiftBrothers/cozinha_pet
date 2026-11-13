import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { ComoFunciona } from './pages/ComoFunciona';
import { Cardapios } from './pages/Cardapios';
import { Planos } from './pages/Planos';
import { AreaDeEntrega } from './pages/AreaDeEntrega';
import { Sobre } from './pages/Sobre';
import { ResponsavelTecnico } from './pages/ResponsavelTecnico';
import { PerguntasFrequentes } from './pages/PerguntasFrequentes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/cardapios" element={<Cardapios />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/area-de-entrega" element={<AreaDeEntrega />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/responsavel-tecnico" element={<ResponsavelTecnico />} />
        <Route path="/perguntas-frequentes" element={<PerguntasFrequentes />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

