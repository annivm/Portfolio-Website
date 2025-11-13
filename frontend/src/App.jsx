import { useRef } from 'react';
import Introduction from './components/Introduction/Introduction'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'

import './App.css'
import ScrollToTop from './components/Shared/ScrollToTop/ScrollToTop';

function App() {
  const introRef = useRef(null);
  const expRef = useRef(null);
  const eduRef = useRef(null);
  const projRef = useRef(null);
  const contactRef = useRef(null);

  // Navbar scroll function
  const scrollTo = ref => {
    const navBarHeight = document.querySelector('.navbar').offsetHeight;
    const offsetTop = ref.current.offsetTop - navBarHeight -28; //28px extra buffer
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  };


  return (
    <>

      <ScrollToTop onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}/>
      <Introduction ref={introRef}/>
      <NavBar
        onIntro={() => scrollTo(introRef)}
        onExp={() => scrollTo(expRef)}
        onEdu={() => scrollTo(eduRef)}
        onProj={() => scrollTo(projRef)}
        onContact={() => scrollTo(contactRef)}
      />
      <Experience ref={expRef}/>
      <Education ref={eduRef}/>
      <Projects ref={projRef}/>
      <Contact  ref={contactRef}/>
    </>
  )
}

export default App
