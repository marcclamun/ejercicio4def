// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Tamagotchi from './components/Tamagotchi';
import Piedra from './components/Game';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import Header2 from './Header2';
import Stats from './components/stats'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './App.css';




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
                    <Link className="nav-link " to={'/Stats'}>
                        {/* Home */}
                    </Link>
                    <Routes>
                        <Route exact path="/Tamagotchi" element={<Tamagotchi />} />
                        <Route exact path="/Piedra" element={<Piedra />} />
                        <Route exact path="/Stats" element={<Stats />} />

                    </Routes>
                </div>
                
            </Router>
        </div>
    );
}

export default App;
