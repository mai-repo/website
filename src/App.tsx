import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Works from "@/pages/Works";
import ScrollToTop from "@/components/ScrollToTop";

export default function App() {
  return (
    <Router basename="/website">
      <ScrollToTop />
      <div className="min-h-screen selection:bg-brand-green selection:text-brand-bg flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
