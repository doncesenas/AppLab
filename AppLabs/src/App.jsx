import { Routes, Route, Link } from 'react-router-dom'
import Clientes from './components/Clientes';
import Cotizaciones from './components/Cotizaciones'
import Productos from './components/Productos';
function App() {
  return (
    <div className="bg-gray-100" min-h-screen>
      <Clientes />
      <Cotizaciones />
      <Productos />
    </div>
  );
}

export default App;
