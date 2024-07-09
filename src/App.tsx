import './App.css'
import {Navbar} from "./Navbar.tsx";
import {Carousel} from "./Carousel.tsx";

function App() {
  return (
      <div className="container mx-auto h-screen p-4 font-axel">
          <Navbar/>
          <pre className="px-6 py-3">🎉 Aloha, Arbeit Adieu! 🌴 Komm zur Renten-Fiesta, wo die Cocktails fließen und die Sorgen schmelzen! 🍹🕺 Du bist VIP (Very Important Pensionär)! 🏖️😎</pre>
          <div className="carousel-container">
              <Carousel/>
          </div>
      </div>
  )
}

export default App
