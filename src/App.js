import ProjectCard from "./Pages/Projects/ProjectCard";
import { projects } from './Data'
import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Contact from './Pages/Projects/Projects'

function App() {

  const renderProjectCards = projects.map( p =>{
    return <ProjectCard key={p.id} project={p} />
  })

  return (
    <div className="relative">

      <Navbar />

      <Home />

      <Skills />

      <Projects />

      <Contact />

    </div>
  );
}

export default App;
