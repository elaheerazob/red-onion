import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequreAuth from './Pages/RequreAuth/RequreAuth';
import Checkout from './Pages/Home/Checkout/Checkout';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}/>
        <Route path='/checkout' element={
          <RequreAuth>
            <Checkout></Checkout>
          </RequreAuth>
        }/>
      </Routes>
    </div>
  );
}

export default App;
