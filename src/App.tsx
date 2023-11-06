import { useState } from 'react';
// // import logo from './logo.svg';
import ModalContainer from './components/ModalContainer';
import './App.css';
import { FormEvent } from 'react';

let counter = 1

function App() {
  const [ modals, setModals ] = useState<Array<Number>>([])

  function addModal(event: FormEvent) {
    event.preventDefault()

    setModals([...modals, counter++])
  }

  function removeModal(event: FormEvent) {
    event.preventDefault()

    setModals(modals.slice(0, -1))
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={ addModal }>
          <button>Add Modal</button>
        </form>

        <ModalContainer addModal={ addModal } removeModal={ removeModal } modals={ modals }></ModalContainer>
      </header>
    </div>
  );
}

export default App;
