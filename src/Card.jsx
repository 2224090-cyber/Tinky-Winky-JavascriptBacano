function Card ({name, attack, type}){
    return(
        <li className = "card" > 

      <p>{name}</p>
      <p>{attack}</p>
      <p>{type}</p>
      {name >= 5 && <span>Fofinho</span>}
      {attack >= 6 && <span>forte</span>}
        </li>
    );
}
export default Card;