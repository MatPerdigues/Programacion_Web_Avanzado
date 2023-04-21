import { Fragment } from 'react';
import Students from './components/Students/Students';
import AddStudent from './components/AddStudent/AddStudent';
import './App.css';



function App() {
  return (
    <Fragment>

      <main className='container-flui'>
        <h1 className='row'>Ejemplo para vincular una API con un protecto React</h1>
        <AddStudent/>
        <Students/>
      </main>
    </Fragment>

    );
}

export default App;
