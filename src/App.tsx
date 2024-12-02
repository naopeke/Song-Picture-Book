import Header from './components/Header';

import Home from './pages/Home';
import Songs from './pages/Songs';
import './App.css'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/songs" element={<Songs/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
