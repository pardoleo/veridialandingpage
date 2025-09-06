import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
//import Projects from "./components/Projects/Projects";
import { LanguageProvider } from "./context/LanguageContext";  // Importa o contexto
import "./page.scss";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="page">
        {/* <NavBar /> */}
        <div className="content">
          <HeroSection />
          <Carousel />
        {/* <Projects /> */}
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}