import React from 'react'
import Header from './pages/Header'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import RoomPage from './pages/RoomPage'

import AboutUspage from './pages/AboutUspage'
import ActivitesPage from './pages/ActivitesPage'
import Explore from './pages/Explore'
import Contact from  './pages/Contact'
import Footer from './pages/Footer'
import ScrollToTop from './component/ScrollTop'

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/room' element={<RoomPage/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<AboutUspage/>}/>
    <Route path='/explore' element={<Explore/>}/>
    <Route path='/activity' element={<ActivitesPage/>}/>
    

    </Routes>
    <Footer/>

    </BrowserRouter>
      
    
  )
}

export default App