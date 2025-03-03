import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import './page.scss'



export default function Home() {
  return (
    <>
      <div className="page">
        <NavBar/>
        <div className="content">
          <HeroSection/>
          <AboutMe/>
          <Projects/>
          <Footer/>
        </div>
      </div>
    </>
  );
}
