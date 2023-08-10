import './App.css'
import Nav from "./components/Nav";
import Presentation from "./components/Presentation";
import Gallerie from "./components/Gallerie";
import CardMenu from './components/cardmenu';

function App() {
  return (
    <div>
 <Nav />
 <div className="page1">
 <Presentation />
 </div>

 <div className="page2 h-screen flex flex-col items-center gap-10 md:justify-around md:gap-0">
<h2 className="mb-10 mt-11 text-center font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Des plats ensoleilés</h2>
 <Gallerie />
 </div>

 <div>
<CardMenu />
 </div>

 </div>
  );
}

export default App;
