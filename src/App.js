import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//Importar Componentes
import MiComponente from './components/MiComponente';

function HolaMundo(nombre,edad){
  var presentacion = 
  <div>
    <h2>Hola, soy {nombre}</h2>
    <h3>Tengo {edad}</h3>
  </div>;

  return presentacion;
}

function App() {
  var nombre = "Abelardo Irarrazabal";
  var edad = 29;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola esta es tu nueva app de react
        </p>
        {HolaMundo(nombre,edad)}
        <section className="componentes">
          <MiComponente/>
        </section>
      </header>
    </div>
  );
}

export default App;
