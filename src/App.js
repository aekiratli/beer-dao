import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/NavigationBar';
import LandingPage from './components/LandingPage'
import { Container } from 'react-bootstrap';
function App() {
  return (
    <Container>
      <NavigationBar/>
      <LandingPage/>
    </Container>
  );
}

export default App;
