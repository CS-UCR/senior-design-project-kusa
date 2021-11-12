import './App.css';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
            <BrowserRouter>
                <Routes path='/' exact component={Home} />
            </BrowserRouter>
    </div>
  );
}

export default App;
