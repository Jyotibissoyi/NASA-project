

import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
// import Calender from 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
 import Home from './Component/Home/Home';
 import About from './Component/About/About'
 import Search from './Component/Search/Search'
 import Contact from './Component/Contact/Contact'


function App() {
  return (
    <div  >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Search' element={<Search />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    )
}

export default App;
