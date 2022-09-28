import React, { useState } from "react";

import { AttackModifier, AttackModifierOperation } from "../types/gloomhaven";

const defaultDeck: AttackModifier[] = [
  { op: AttackModifierOperation.Add, value: 0 },
  { op: AttackModifierOperation.Add, value: 0 },
  { op: AttackModifierOperation.Add, value: 0 },
  { op: AttackModifierOperation.Add, value: 0 },
  { op: AttackModifierOperation.Add, value: 0 },
  { op: AttackModifierOperation.Add, value: 0 },
  { op: AttackModifierOperation.Add, value: 1 },
  { op: AttackModifierOperation.Add, value: 1 },
  { op: AttackModifierOperation.Add, value: 1 },
  { op: AttackModifierOperation.Add, value: 1 },
  { op: AttackModifierOperation.Add, value: 1 },
  { op: AttackModifierOperation.Add, value: -1 },
  { op: AttackModifierOperation.Add, value: -1 },
  { op: AttackModifierOperation.Add, value: -1 },
  { op: AttackModifierOperation.Add, value: -1 },
  { op: AttackModifierOperation.Add, value: -1 },
  { op: AttackModifierOperation.Add, value: 2 },
  { op: AttackModifierOperation.Add, value: -2 },
  { op: AttackModifierOperation.Multiply, value: 2 },
  { op: AttackModifierOperation.NullEffect, value: 0 },
];

const Deck = () => {
  const [cards, setCards] = useState(defaultDeck);

  const handleAddCard = () => {
    setCards((cards) => [...cards, { op: AttackModifierOperation.Add, value: 9000 }]);
  };

  return (
    <div>
      <ul>
        {cards.map((card) => <div>{`Op: ${card.op}, Value: ${card.value}`}</div>)}
      </ul>
      <button className="bg-blue-500" onClick={handleAddCard} type="button" aria-label="button">Add Card</button>
    </div>
  );
};

export default Deck;
