// React Hooks
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import './App.css'

// Screens imported 
import HeroScreen from './screens/HeroScreen'
import ChooseRole from './screens/ChooseRole';
import LoginScreen from './screens/LoginScreen';
import RegisterBuyer from './screens/RegisterBuyer';
import RegisterSeller from './screens/RegisterSeller';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HeroScreen/>}/>
      <Route path="/chooseRole" element={<ChooseRole/>}/>
      <Route path="/login" element={<LoginScreen/>}/>
      <Route path="/registerBuyer" element={<RegisterBuyer/>}/>
      <Route path="/registerSeller" element={<RegisterSeller/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App
