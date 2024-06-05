
import { Route, Routes } from 'react-router-dom';
import './App.css';
import UploadImage from './components/UploadImage';
import SecureUpload from './components/SecureUpload';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path="/upload" element={<UploadImage />}></Route>
        <Route exact path="/secure-upload" element={<SecureUpload />}></Route>
      </Routes>
    </div>
  );
}

export default App;
