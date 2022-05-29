import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './login';
import Forget from './forget';
import Registration from './registration';
import Home from './home';







export default function app() {
  return <div>
  <BrowserRouter>
  
    <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/Login" element={<Login></Login>}></Route>
    <Route path="/Registration" element={<Registration></Registration>}></Route>
    <Route path="/Forget" element={<Forget></Forget>}></Route>

    </Routes>
  </BrowserRouter>
  </div>
    
     
   
}