import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
import AboutPage from "./pages/About";
import FoundationPage from "./pages/Foundation";
import GalleryAndGetInvolved from "./pages/Gallery";
import DonationPage from "./pages/Donation";
import ContactPage from "./pages/Contact";



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar/> 
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage/>}/>   
            <Route path="/foundation" element={<FoundationPage/>}/>  
            <Route path="/gallery" element={<GalleryAndGetInvolved/>}/>  
            <Route path="/donate" element={<DonationPage/>}/> 
            <Route path="/contact" element={<ContactPage/>}/>    
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
