// import './App.css';

import Header from "./components/Header.js";
import Body from "./components/Body";
import RestaurantSlider from "./components/Restaurant/RestaurantSlider.js";
import Footer from "./components/Footer.js";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Body />
      <RestaurantSlider />
      <Footer />
    </div>
  );
}

export default App;
