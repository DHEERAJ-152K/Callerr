import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Meet from './Meet'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/meet" element={<Meet />} />
       </Routes>
         
        
    </div>
  );
}

export default App;
