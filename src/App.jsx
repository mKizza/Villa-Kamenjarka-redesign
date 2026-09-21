import "./App.css";
import Navbar from "./components/Navbar";
import HeroGallery from "./components/HeroGallery";
import About from "./components/About";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* HERO */}
      <section
        id="home"
        className="relative h-[100svh] w-full overflow-hidden bg-black"
      >
        <HeroGallery />
        <Navbar />
      </section>
      {/* ABOUT */}
      <About />
      <Amenities />
      <Gallery />
      <Contact />
    </main>
  );
}

export default App;
