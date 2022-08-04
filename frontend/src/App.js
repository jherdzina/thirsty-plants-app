import React from 'react';
import './styles.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Userfront from '@userfront/react';
import NavBar from './components/NavBar.js';
import MyPlantCards from './components/MyPlantCards'


export default function App() {
  return (
    <div>
      <Router>
        <div>
          <NavBar/>
        </div>
      </Router>
      < MyPlantCards />
    </div>
  );
}
