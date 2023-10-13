import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Contact from './Pages/Contact/Contact'

function App() {

 


  return (
    <div className="relative bg-[#f7f7f7] h-full m-auto">

      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Contact />       

    </div>
  );
}

export default App;
