import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import User from './user';
import Create from './create';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Update from './update';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/update/:Id' element={<Update />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
