
import  Homepage  from './pages/Homepage'
import './App.css'
import { Routes, Route } from 'react-router'

function App() {
 

  return (
    <Routes>
      <Route index element={<Homepage/>}/>
      <Route path='checkout' element={<div>test checkout page</div>}/>
    </Routes>
  );
}



export default App
