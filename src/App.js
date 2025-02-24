import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import  Signup  from './components/signup';
import  Login  from './components/login';

function App() {
  return (
    <>
    <div className="App">
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </div>
    </>
  );
}

export default App;
