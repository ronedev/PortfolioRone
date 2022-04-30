import Navbar from './components/navbar/Navbar';
import './scss/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'components/home/Home';
import Aboutme from 'components/about/Aboutme';
import Skills from 'components/skills/Skills';
import Works from 'components/works/Works';
import Reviews from 'components/reviews/Reviews';
import Contact from 'components/contact/Contact';
import Footer from 'components/footer/Footer';

function App() {

  return (
    <Router className="App">
      <Switch>
        <Route path="/">
          <Navbar />
          <Home />
          <Aboutme />
          <Skills />
          <Works />
          <Reviews />
          <Contact />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
