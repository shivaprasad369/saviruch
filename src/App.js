import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Slider from "./components/slider/Slider";
import Testimonial from "./components/testnomial/Testinomial";
import Virtual from "./components/virtual/Virtual";
import Contact from "./contact/Contact";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Products/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
