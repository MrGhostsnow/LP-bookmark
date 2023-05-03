import Contact from './components/Contact';
import Download from './components/Download';
import FAQ from './components/FAQ';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import GlobalStyle from './Global';
import { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container >
        <NavBar />
        <Header />
        <Features />
        <Download />
        <FAQ />
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;
