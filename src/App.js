import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Day1 from './Pages/Day1/Day1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/day1' element={<Day1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
