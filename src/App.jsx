
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/pages/home/footer/Footer';
import Home from './components/pages/home/header/Home';
import Main from './components/pages/home/main/Main';
import Paymen from './components/pages/home/payment/Paymen';

function App() {
  return (
    <div className="container">
      <div className="App">
        <Home/>
        <Main/>
        <Routes>
          <Route path='/' element={<Footer/>}></Route>
        </Routes>
        <Routes>
          <Route path='/payment' element={<Paymen/>}></Route>
        </Routes>

      </div>

    </div>
  );
}

export default App;
