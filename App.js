import './App.css';
import About from './compounts/About';
import Contact from './compounts/Contact';
import Footer from './compounts/Footer';
import Header from './compounts/Header';
import Hero from './compounts/Hero';
import Projects from './compounts/Projects';
import Resume from './compounts/Resume';

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero />
        <About/>
        <Projects/>
        <Resume/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;