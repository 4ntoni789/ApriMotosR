import './App.css';
import Header from './componentes/Header';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import ModeloMoto from "./paginas/ModeloMoto"
import Error404 from './componentes/Error404';
import Distribuidor from './componentes/Distribuidor';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/grupos' element={<h1>grupos</h1>} />
          <Route path='/:name' element={<ModeloMoto />} />
          <Route path='/distribuidores' element={<Distribuidor/>} />
          <Route path='*' element={<Error404/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
