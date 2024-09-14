
import './App.css'
import {Header} from "./components/header/Header.tsx";
import {Home} from "./components/home/Home.tsx";
import {AboutMe} from "./components/about-me/AboutMe.tsx";
import {Projects} from "./components/projects/Projects.tsx";
import {ContactMe} from "./components/contact/ContactMe.tsx";


function App() {

  return (
    <>
        <Home/>
        <AboutMe/>
        <Projects/>
        <ContactMe/>
    </>
  )
}

export default App
