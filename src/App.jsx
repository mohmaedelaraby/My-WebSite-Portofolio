import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import { FrontDESC, FrontEND, FULLDESC, FullStack } from "./data";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
        transition: darkMode? "0.9s ease-in-out" :"0.9s ease-in-out"
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList 
      head="FULL STACK PROJECTS"
      desc={FULLDESC}
      data={FullStack}/>
       <ProductList 
      head="FULL STACK PROJECTS"
      desc={FrontDESC}
      data={FrontEND}/>
      <Contact />
    </div>
  );
};

export default App;
