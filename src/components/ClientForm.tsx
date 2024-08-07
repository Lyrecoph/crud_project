import { useState } from "react"
import { ClientType } from "../typescript/ClientType";

type ClientFormProps = {
    onAddCustomer:(client: ClientType) => void;
}

export default function ClientForm({onAddCustomer}:ClientFormProps){
    const [newCustomer, setNewCustomer] = useState("");

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewCustomer(e.target.value)
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id = new Date().getTime();
        const nom = newCustomer;

        onAddCustomer({id,nom});

        setNewCustomer("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                value={newCustomer}
                type="text" 
                placeholder='Entrer un nom' 
                onChange={handleChange}
            />
            <button>Confirmer</button>
      </form>
    )
}