import "./App.css";
import Booktrip from "./Components/BookTrip/Booktrip";
import Catogry from "./Components/Catogry/Catogry";
import Dastination from "./Components/Destinations/Dastination";
import Hero from "./Components/Hero/Hero";

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
      {/* Icons Section  */}
      {/* News Letter Section  */}
      {/* Footer Section  */}
    </div>
  );
}

export default App;
