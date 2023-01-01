import './App.css';
import Navbar from './components/Navbar/Navbar';
import cl from "./App.css";
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={cl.app}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<h1>404 not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;

