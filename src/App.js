import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CryptoDetails from './pages/CryptoDetails';
import CryptoHome from './pages/CryptoHome';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CryptoHome />} />
        <Route path="/coin/:id" element={<CryptoDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
