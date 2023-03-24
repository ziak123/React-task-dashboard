import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard/Dashboard';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    {/* <div className='logsect'>
      <div className='hdive'>
    <h1 className='h1'>Logo Here</h1>
    </div>

    <div className='hh'>
    <div className='Ratesect'>
    </div>
    <div className='udata'></div>
    </div>
    </div> */}
    </>
  );
}

export default App;