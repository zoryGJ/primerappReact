import Saludo from "./components/saludo";
import {Despedida, Perensejo, Postre} from "./components/saludo";


//*componente de aplicacion
function App() {
  return (
    <div>
      <h1>Hola React</h1>
      <hr/>
      <Saludo
        persona= {{
          nombre:'Juan',
          edad:25,
          colorCabello: 'negro'
        }}

        nacionalidad= 'Colombia'
      />
      <hr/>
      <Saludo
        persona={{
          nombre:'Manuel',
          edad:30,
          colorCabello: 'pintado'
        }}
      />
      <hr/>
      <Despedida>
      </Despedida>
      <hr/>
      <Perensejo>
      </Perensejo>
      <hr/>
      <Postre>
      </Postre>
    </div>
  );
}

export default App;
