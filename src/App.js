import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';
import Buy from './Pages/Buy';
import Sell from './Pages/Sell';
import View from './Pages/View';
import { useState } from 'react';
import Edit from './Pages/Edit';

function App() {
  const [bikeInfo, setBikeInfo] = useState({
    sellerName: '',
    sellerPhone: '',
    brand: '',
    model: '',
    color: '',
    imagelink: '',
    price: ''
  });
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/buy' element={<Buy />} />
        <Route path='/view' element={<View />} />
        <Route path='/sell' element={<Sell bikeInfo={bikeInfo} setBikeInfo={setBikeInfo}/>} />
        <Route path='/edit/:id' element={<Edit />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
