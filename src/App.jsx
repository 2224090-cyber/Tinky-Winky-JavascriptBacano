// PONTO DE PARTIDA DA AULA 4
//
// É exatamente onde o professor acabou o live coding do Bloco 1:
// uma app React criada com o Vite, já sem o código de exemplo.
//
// Para pôr a correr (dentro da pasta client/ do teu repo):
//     npm install
//     npm run dev
// e abrir http://localhost:5173
//
// Tarefa 1: substitui este array vazio pelo array cards do teu server
// (o que fizeste na aula 2).
import Card from "./Card.jsx";
import { useState } from "react";

const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Baby Dragon",  type: "Criatura", attack: 7, defense: 10     },
  { name: "Blue-Eyes Toon Dragon",  type: "Fofinho", attack: 500, defense: 2500},
  { name: "Krokodilus",  type: "Criatura", attack: 30, defense: 200},
  
  ];

function App() {


  const [filter, setFilter] = useState("Todas");
  const [search, setSearch] = useState("");
  const [randomCard, setRandomCard] = useState(null);
 
  function chooseRandomCard() {
    if (cards.length === 0) return;
    const index = Math.floor(Math.random() * cards.length);
    setRandomCard(cards[index]);
  }
 
  const visible = cards.filter(
    (card) =>
      (filter === "Todas" || card.type === filter) &&
      card.name.toLowerCase().includes(search.toLowerCase())
  );
 
 

  return (
    <main>
      <h1>A minha coleção</h1>

       <p>Eu tenho {cards.length} cartas</p>


  <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Pesquisar" />
 

     <div>
       <button onClick={() =>  setFilter("Todas")}> Todas as cartas </button>
       <button onClick={() =>  setFilter("Fofinho")}> Fofinho </button>
       <button onClick={() =>   chooseRandomCard()}>  Aleatório </button>
     </div> 

      
{randomCard && (
  <div>
    <h2>Carta Aleatória</h2>
    <Card {...randomCard} />
  </div>
)}

      <ul>
        {visible.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            attack={card.attack}
            type={card.type}
          />
        ))}
      </ul>

 
    </main>
  );
}

export default App;
