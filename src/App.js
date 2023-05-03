import Contact from './components/Contact';
import Download from './components/Download';
import FAQ from './components/FAQ';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { Container } from './styles'

function App() {
  return (
    <Container >
      <NavBar />
      <Header />
      <Features />
      <Download />
      <FAQ />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
