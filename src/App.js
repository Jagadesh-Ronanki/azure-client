import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './pages/products/page.js';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
        </Routes>
     </BrowserRouter>
    </>
    
  );
}

export default App;
