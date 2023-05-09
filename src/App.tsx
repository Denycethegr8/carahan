import Home from "./components/Home"
import Brands from "./components/Brands"
import About from "./components/About"
import Layout from "./components/Layout"
import Contact from "./components/Contact"
import Store from "./components/Store"
import StylingGallery from "./components/StylingGallery"
import MariSteiger from "./components/MariSteiger"
import Hubatt from "./components/hubatt"
import Prauban from "./components/prauban"
import Imported from "./components/imported"

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
            <Route path="contact" element={<Contact />} />
            <Route path="store" element={<Store />} />
            <Route path="stylingGallery" element={<StylingGallery />} />
            <Route path="mariSteiger" element={<MariSteiger />}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
