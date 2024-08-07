
type ClientProps = {
    detailClient:{
        id: number;
        nom: string;
    };
    onDelete: () => void
}
export default function Client({detailClient, onDelete}:ClientProps){
    return(
        <li>
              {detailClient.nom} 
              <button onClick={onDelete}>X</button>
        </li>
    )
}