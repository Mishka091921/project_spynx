import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
    <div className="navbar fixed top-0 left-0 right-0 z-50">
        <Navbar /> 
      </div>
      <div className=" mx-auto">
        <section id="hero" className="h-screen flex items-center pt-20">
          <HeroSection />
        </section>
        <section id="feature" className="h-screen flex items-center pt-20">
          <FeatureSection />
        </section>
        <section id="roadmap" className="h-screen flex items-center pt-20">
          <Workflow />
        </section>
        <section id="tokenomics" className="pb-25  items-center pt-20">
          <Pricing />
        </section>
        <h1>
        
        </h1>

   
      </div>
    </>
  );
};

export default App;
