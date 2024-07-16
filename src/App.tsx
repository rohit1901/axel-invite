import "./App.css";
import { Navbar } from "./Navbar.tsx";
import { Carousel } from "./Carousel.tsx";
import data from "./data.json";

function App() {
  return (
    <div
      className="container mx-auto h-screen p-4 font-axel"
      data-theme={data.theme}
    >
      <Navbar {...data.navbar} />
      <pre className="px-6 py-3">{data.headline}</pre>
      <div className="carousel-container">
        <Carousel {...data.carousel} />
      </div>
    </div>
  );
}

export default App;
