import About from "../../About/About"
import Contacts from "../../Contacts/Contacts"
import Footer from "../../Footer/Footer"
import Hero from "../../Hero/Hero"
import Projects from "../../Projects/Projects"
import Services from "../../Services/Services"
import Skills from "../../Skills/Skills"

 

const Home = () => {
  return (
    <div>
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Services></Services>
        <Projects></Projects>
        <Contacts></Contacts>
        <Footer></Footer>
    </div>
  )
}

export default Home