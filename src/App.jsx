import { Route, Routes } from "react-router";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Home from "./components/pages/Home/Home";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";

 

const App = () => {
  return (
    <>
      <Navbar></Navbar>

      <header className=" bg-black">
        <Hero></Hero>
      </header>
      <main>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/projects/:slug" element={<ProjectDetails></ProjectDetails>}></Route>
        </Routes>
      </main>
    </>
  );
};

export default App;