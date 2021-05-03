import './App.css';
import Blog from './components/Blog/Blog';
import ContactForm from './components/ContactForm/ContactForm';
import Projects from './components/Projects/Projects';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import ProOne from './components/ProOne/ProOne';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/'>
        <HomePage></HomePage>
        </Route>
     <Route path="/home">
     <HomePage></HomePage>
     </Route>
     <Route path="/work">
     <ProOne></ProOne>
     </Route>
     <Route path="/blog">
     <Blog></Blog>
     </Route>
     <Route path="/contact">
     <ContactForm></ContactForm>
     </Route>
     <Route path='*'>
        <h1>404 Page not found</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
