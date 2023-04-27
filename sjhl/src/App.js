import logo from './logo.svg';
import './App.css';
import Introduction from "./components/Introduction";
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"
import MyNavbar from './components/MyNavbar';
import RenderCanvas from './components/RenderCanvas'
import Skills from './components/Skills'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <div className="App">
      <div className="Top">
         <MyNavbar/>
      </div>  
      
      <div className="Body">  
        <Introduction/>
        <Interests/>
      </div>
      <div className = "Skills">
        <Skills/>
      </div>
      <div className="Bottom">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
