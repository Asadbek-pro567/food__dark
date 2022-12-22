
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/pages/home/footer/Footer';
import Home from './components/pages/home/header/Home';
import Main from './components/pages/home/main/Main';

function App() {
  return (
    <div className="container">
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
        <Main/>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
