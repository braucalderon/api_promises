import React from 'react';
import './App.css';
import GetWeather from './component/getWeather.jsx';
import { Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <GetWeather />
    </div>
  );
}

export default App;
