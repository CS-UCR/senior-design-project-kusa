import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar> </NavBar>
        <BrowserRouter>
          <Routes> path='/' exact component={Home} </Routes>
        </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
