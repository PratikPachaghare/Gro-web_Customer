import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Clients from './components/sections/Clients';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Process from './components/sections/Process';
import CTA from './components/sections/CTA';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Clients />
        <WhyChooseUs />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
