import "./App.css";
import Footer from "./Components/Footer";
import Reviews from "./Components/Reviews";
import Latestwork from "./Components/Latestwork";
import Connectsection from "./Components/Connectsection";
import Herosection from "./Components/Herosection";

function App() {
  return (
    <div className=" font-['Nunito']">
      <Herosection />
      <Latestwork />
      {/* <Reviews /> */}
      <Connectsection />
      <Footer />
    </div>
  );
}

export default App;
