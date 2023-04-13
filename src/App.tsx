import Home from "./components/Home"
import Brands from "./components/Brands"
import About from "./components/About"
import Layout from "./components/Layout"
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return ( 
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element ={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="brands" element={<Brands />} />
            <Route path="about" element={<About />} />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
