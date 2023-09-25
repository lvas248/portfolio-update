import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Contact from './Pages/Contact/Contact'
import { Switch, Route } from "react-router-dom";
import FullProjectDetail from "./Pages/Projects/FullProjectDetail";

function App() {



  return (
    <div className="relative bg-[#f7f7f7] m-auto">

     

      <Switch>

        <Route path='/project/:projectId'>
          <FullProjectDetail />
        </Route>

       <Route path='/'> 
          <Navbar />
          <Home />
          <Projects />
          <Skills />
          <Contact />
        </Route>



 

      </Switch>
       
    </div>
  );
}

export default App;
