import React from 'react';
import './App.css';
import GetWeather from './component/getWeather.jsx';
import StateWeather from './component/stateWeather.jsx';
import { Switch,  Route  } from 'react-router-dom';
import State from './component/state.js';


const App = () => {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={GetWeather} />
      <Route path='/stateWeather' component={StateWeather} />
      <Route path='/state' component={State} />
    </Switch>

    </div>
  );
}

export default App;
