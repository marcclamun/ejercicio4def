// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Tamagotchi from './components/Tamagotchi';
import Piedra from './components/Game';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import Header2 from './Header2';
import './App.css';


const mongoose = require('mongoose');
  // Conectar a la base de datos usando mongoose
  mongoose.connect('mongodb://localhost/my-database', {
    useNewUrlParser: true, // Estos parámetros son recomendados por
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  // Obtener la conexión y manejar errores
  const db = mongoose.connection;
  // Si ocurre un error, lo mostramos en la consola
  db.on('error', console.error.bind(console, 'Connection error:'));

  db.once('open', () => {
    console.log('MongoDB database connection established successfully');
  });

function App() {
  

  return (
    <div className='header'>
      <Header2 />
      <Router>
        <div className='h'>
          <Link className="nav-link " to={'/Tamagotchi'}>
            {/* Home */}
          </Link>
          <Link className="nav-link " to={'/Piedra'}>
            {/* Home */}
          </Link>
          <Routes>
            <Route exact path="/Tamagotchi" element={<Tamagotchi />} />
            <Route exact path="/Piedra" element={<Piedra />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
