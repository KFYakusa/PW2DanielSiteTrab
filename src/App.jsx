import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Routes from './Rotas/Routes';
import Footer from './Components/Footer/Footer';

function App() {
  return (
   <BrowserRouter>
    <Header/>
    <Routes/>
    <Footer/>
   </BrowserRouter>
  );
}

export default App;
