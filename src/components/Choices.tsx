import { MouseEventHandler } from "react";
import "../App.css";
import { Values } from "../types";

type TypeChoices = {
  name: Values;
  imagePath: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function Choices(props: TypeChoices) {
  return (
    <button className="button-choice" onClick={props.onClick}>
      <img width={256} height={256} src={props.imagePath} alt={props.name} />
    </button>
  );
}

export default Choices;
