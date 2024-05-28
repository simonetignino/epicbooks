import { Container } from 'react-bootstrap';
import './App.css';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav'
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import fantasy from './books/fantasy.json'

function App() {
  return (
    <>
    <MyNav/>
    <Container className='my-3'>
      <Welcome/>
      <AllTheBooks books={fantasy}/>
    </Container>
    <MyFooter/>
    </>
    
  );
}

export default App;
