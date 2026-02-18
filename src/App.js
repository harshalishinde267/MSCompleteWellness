import './style.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Services from './routes/Services';
import Blog from './routes/Blog';
import Testimonials from './routes/Testimonials';
// import NutriPlay from './pages/Game';
import Contact from './routes/Contact';
import Game from './pages/Game';
import About from './components/AboutMe';
import BlogDetail from './components/BlogDetail';
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/nutriplay/*" element={<Game />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      {/* <Navbar />  */}
    </div>
  );
}









