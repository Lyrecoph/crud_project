import './App.css'

function App() {
  
  return (
    <>
      <h1>Liste des clients</h1>
      <ul>
        <li>Paul DUPONT <button>X</button></li>
        <li>Lisa DURAND <button>X</button></li>
        <li>Geraud FORD <button>X</button></li>
        <li>Scott McCall <button>X</button></li>
      </ul>
      <form action="">
        <input 
          type="text" 
          placeholder='Entrer un nom' 
        />
        <button>Confirmer</button>
      </form>
    </>
  )
}

export default App
