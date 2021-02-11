import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//Importar Componentes
import MiComponente from './components/MiComponente';

function ListarLenguajes(nombre,profesion){
  var presentacion = 
  <div>
    <h2>Hola, nombre es {nombre}</h2>
    <h3>Soy {profesion} y me desempeño como fullstack developer</h3>
  </div>;

  return presentacion;
}

function App() {
  var nombre = "Abelardo Irarrazabal";
  var profesion = "Ingeniero de software";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Primera App en React
        </p>
        {ListarLenguajes(nombre,profesion)}
        <section className="componentes">
          <MiComponente/>
        </section>
      </header>
    </div>
  );
}

export default App;
