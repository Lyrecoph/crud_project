import { useState } from 'react'
import './App.css'
import Client from './components/Client'

function App() {
  const title = "Liste des clients"
  const [clients, setClients] = useState([
    {id:1, nom:"Paul DUPONT"},
    {id:2, nom:"Lisa DURAND"},
    {id:3, nom:"Geraud FORD"},
    {id:4, nom:"Scott McCall"},
  ])

  const handleDelete = (id:number) => {
    setClients(clients.filter(client => client.id !== id))
  }

  
  
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {
          clients.map(client =>
            <Client 
              key={client.id} 
              detailClient={client} 
              onDelete={()=>handleDelete(client.id)} 
              backgroundAddColor='green'
            />
          )
        }
      </ul>
    </>
  )
}

export default App
