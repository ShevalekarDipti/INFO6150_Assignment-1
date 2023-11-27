import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import "./App.css";
import Weather from "./components/Weather";
import HourlyWeather from "./components/HourlyWeather";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='' element={<Weather />}></Route>
          <Route path='/:day' element={<HourlyWeather />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
