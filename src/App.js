import "./App.css";
import Booktrip from "./Components/BookTrip/Booktrip";
import Catogry from "./Components/Catogry/Catogry";
import Dastination from "./Components/Destinations/Dastination";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Logos from "./Components/Logos/logos";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import Slider from "./Components/Slider/Slider";

function App() {
  return (
    <div className="App">
      {/* Hero Section  */}
      <Hero />
      {/* Catogry Section  */}
      <Catogry />
      {/* Destinations Sextion  */}
      <Dastination />
      {/* Book Trip  */}
      <Booktrip />
      {/* Testimonal Section  */}
      <Slider />
      {/* Icons Section  */}
      <Logos />
      {/* News Letter Section  */}
      <NewsLetter />
      {/* Footer Section  */}
      <Footer />
    </div>
  );
}

export default App;
