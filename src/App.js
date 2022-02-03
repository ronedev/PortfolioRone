import Navbar from './components/Navbar';
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
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import db from './firebase'
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'
import Admin from './components/Admin';
import Actualizar from './components/Actualizar';
import Agregar from './components/Agregar';

function App() {
  const skills = [htmlPixel, cssPixel, jsPixel, reactPixel, figmaPixel, sassPixel, mysqlPixel, phpPixel, premierePixel, photoshopPixel, ilustratorPixel, gulpPixel]

  const [proyects, setProyect] = useState([]);

  const getProyects = async () => {
    const querySnapshot = await getDocs(collection(db, 'proyects'))
    querySnapshot.forEach(doc => {
      let proyect = doc.data()
      setProyect(proyects => [...proyects, proyect])
    })
  }

  useEffect(() => {
    getProyects();
  }, [])

  const [auth, setAuth] = useState(false)
  const [form, setForm] = useState({
    name: '',
    contraseña: '',
  })

  const [alert, setAlert] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    console.log(form)
  }
  const resetForm = () => {
    document.documentElement.style.overflowY = "visible"
    setForm({
      name: '',
      contraseña: ''
    })
    setAlert(true)
    setTimeout(() => {
      setAlert(false)
    }, 3000);
  }

  const login = (e) => {
    e.preventDefault()
    if (form.name === 'agustinvera2589' && form.contraseña === '250899230718') {
      setAuth(true)
    } else {
      resetForm();
    }
  }

  return (
    <Router className="App">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/admin" render={() => {
          return auth ? <Admin proyectos={proyects} /> :
            <div className="contenedorCentrado">
              <form className="contactForm" onSubmit={login}>
                <h3 className={alert ? 'titulo active' : 'loading'}>Nombre de usuario o contraseña incorrecto</h3>
                <fieldset className="legendForm">
                  <label name="name">Nombre de usuario:</label>
                  <input type="text" name="name" onChange={handleChange} className="campoForm" required value={form.name}></input>
                  <label name="contraseña">Contraseña:</label>
                  <input type="password" name="contraseña" onChange={handleChange} className="campoForm" required value={form.contraseña}></input>
                </fieldset>
                <button type="submit" className="btn">Ingresar</button>
              </form>
            </div>
        }}>
        </Route>
        <Route path="/agregar">
          <Agregar proyectos={proyects} />
        </Route>
        <Route path="/actualizar/:id">
          <Actualizar />
        </Route>
        <Route path="/">
          <Navbar />
          <Sobremi />
          <Skills skills={skills} />
          <Proyectos proyectos={proyects} />
          <Contacto />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
