import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Heiro';
import About from './components/About';
import Projects from './components/Projects';
import Skills  from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>


    </div>
  );
}

export default App;
