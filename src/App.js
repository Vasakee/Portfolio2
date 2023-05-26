import { Box } from '@chakra-ui/react'
import { useRef } from 'react'
import Navbar from './Components/Navbar';
import Scrollablefeed from 'react-scrollable-feed'
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Display from './Components/Background.jpg'

function App() {
  const aboutRef = useRef(null)
  const projectRef = useRef(null)
  const skillRef = useRef(null)
  const contactRef = useRef(null)

  const scrolltopage = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }


  return (
    <Box height={{ base: "250vh", md: "100vh" }} width={{ base: "100vw", md: "100vw" }} >
      <Navbar scrolltopage={scrolltopage} aboutRef={aboutRef} projectRef={projectRef} skillRef={skillRef} contactRef={contactRef} />
      <Scrollablefeed>
        <About aboutRef={aboutRef} />
        <Projects projectRef={projectRef} />
        <Box color={'white'} backgroundImage={Display} backgroundSize={'cover'}
          backgroundPosition='center'>
          <Skills skillRef={skillRef} />
          <Contact contactRef={contactRef} />
        </Box>
      </Scrollablefeed>
    </Box>
  );
}

export default App;
