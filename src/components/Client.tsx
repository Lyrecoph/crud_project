import { ClientType } from "../typescript/ClientType";

type ColorOption = "green" | "gold" | "purple";

type ClientProps = {
    detailClient:ClientType;
    onDelete: () => void;
    backgroundAddColor?: ColorOption
}
export default function Client({detailClient, onDelete, backgroundAddColor}:ClientProps){
    return(
        <li>
              {detailClient.nom} 
              <button style={{background:backgroundAddColor}} onClick={onDelete}>X</button>
        </li>
    )
}