import Download from './components/Download';
import Features from './components/Features';
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
    </Container>
  );
}

export default App;
