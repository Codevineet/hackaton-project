import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Weathercard from './components/weather/weathercard';
import Temp from './components/weather/temp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />} />
        <Route path="/weather" element={<Temp />} />
      </Routes>
    </Router>
  );
}

function DefaultLayout() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}
export default App;
