import React from 'react';
import './assets/styles/Header.scss';
import './App.css';
import CarBookingFlow from './components/CarBookingFlow';
import Dashboard from './components/Dashboard';
import Head from './components/Head';


function App() {
  return (
    <div className="App">
      <Head />
      <CarBookingFlow />
      <Dashboard />
    {/*   <Footer /> */}
    </div>
  );
}

export default App;
