
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Index from './pages/Index';
import Inicial from './pages/Inicial';
import Cotacoes from './pages/Cotacoes';
import ProdutosFornecedores from './pages/ProdutosFornecedores';
import Dashborad from './pages/Deashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<Inicial />} />
            <Route path="cotacoes" element={<Cotacoes />} />
            <Route path="produtos-fornecedores" element={<ProdutosFornecedores />} />
            <Route path="dashboard" element={<Dashborad />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
