import "./App.css";
import About from "./components/About/About";
import BottomFixNav from "./components/BottomFixNav/BottomFixNav";
import Counter from "./components/Counter/Counter";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import RightFixNav from "./components/RightFixNav/RightFixNav";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <RightFixNav />
      <BottomFixNav />
      <Home />
      <Services />
      <About />
      <Projects />
      <Team />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
