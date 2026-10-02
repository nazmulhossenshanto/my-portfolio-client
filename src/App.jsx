import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

 

const App = () => {
  return (
    <>
      <Navbar></Navbar>

      <header className=" bg-black">
        <Hero></Hero>
      </header>
    </>
  );
};

export default App;