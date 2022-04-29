import Navbar from './components/navbar/Navbar';
import Skills from './components/Skills';
import Sobremi from './components/Sobremi';
import './scss/App.scss';
import cssPixel from './img/csspixel.png';
import figmaPixel from './img/figmapixel.png';
import gulpPixel from './img/gulppixel.png';
import htmlPixel from './img/htmlpixel.png';
import ilustratorPixel from './img/ilustratorpixel.png';
import jsPixel from './img/jspixel.png';
import mysqlPixel from './img/mysqlpixel.png';
import phpPixel from './img/phppixel.png';
import premierePixel from './img/premierepixel.png';
import reactPixel from './img/reactpixel.png';
import sassPixel from './img/sasspixel.png';
import photoshopPixel from './img/photoshoppixel.png';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'components/home/Home';
import Aboutme from 'components/about/Aboutme';

function App() {
  const skills = [htmlPixel, cssPixel, jsPixel, reactPixel, figmaPixel, sassPixel, mysqlPixel, phpPixel, premierePixel, photoshopPixel, ilustratorPixel, gulpPixel]

  return (
    <Router className="App">
      <Switch>
        <Route path="/">
          <Navbar />
          <Home />
          <Aboutme />
          <Sobremi />
          <Skills skills={skills} />
          <Contacto />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
