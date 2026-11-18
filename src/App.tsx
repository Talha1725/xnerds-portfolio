import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "@/components/ScrollToTop";
import { BackToTop } from "@/components/BackToTop";

/** Everything inside the router; shared by the browser entry and the build-time prerender. */
export const AppRoutes = () => (
  <>
    <ScrollToTop />
    <div className="min-h-screen bg-ink text-fg">
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <BackToTop />
    </div>
  </>
);

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
