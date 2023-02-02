import { useState } from "react";
import "./App.css";
import Choices from "./components/Choices";
import { Values } from "./types";

type StateChoices = [user: Values, computer: Values];

const choices: Record<Values, { win: Values; img: string }> = {
  pedra: {
    win: "tesoura",
    img: "/images/pedra.png",
  },
  papel: {
    win: "pedra",
    img: "/images/papel.png",
  },
  tesoura: {
    win: "papel",
    img: "/images/tesoura.png",
  },
};

const options = Object.keys(choices) as Array<Values>;

function App() {
  const [roundChoices, setRoundChoices] = useState([
    "pedra",
    "pedra",
  ] as StateChoices);
  const [playerChoice, computerChoice] = roundChoices;

  const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };

  const determineWinner = (playerChoice: Values, computerChoice: Values) => {
    const mechanic = {
      [playerChoice]: "Empate",
      [choices[playerChoice].win]: "Você ganhou",
    };

    return mechanic[computerChoice] || "Computador ganhou";
  };

  const setChoices = (enterPlayerChoice: Values) => {
    setRoundChoices([enterPlayerChoice, getComputerChoice()]);
  };

  return (
    <>
      <section className="box-choices">
        {options.map((item) => (
          <Choices
            key={item}
            name={item}
            imagePath={choices[item].img}
            onClick={() => setChoices(item)}
          />
        ))}
      </section>
      {playerChoice && computerChoice && (
        <section className="result">
          {roundChoices.map((player, ind) => (
            <section key={ind}>
              <p>{ind === 0 ? "Jogador" : "Computador"}</p>
              <img src={choices[player].img} width={256} height={256} alt={player} />
            </section>
          ))}
          <p className="winner">
            {determineWinner(playerChoice, computerChoice)}
          </p>
        </section>
      )}
    </>
  );
}

export default App;
