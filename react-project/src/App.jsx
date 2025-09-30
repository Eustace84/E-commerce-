
import  Homepage  from './pages/Homepage'
import './App.css'
import { Routes, Route } from 'react-router'
import CheckoutPage from './pages/CheckoutPage';

function App() {
 

  return (
    <Routes>
      <Route index element={<Homepage/>}/>
      <Route path='checkout' element={<CheckoutPage />}/>
    </Routes>
  );
}



export default App
