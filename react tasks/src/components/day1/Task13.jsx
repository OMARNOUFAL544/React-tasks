import React from "react";

const cards = [
  {
    id: 1,
    title: "Card 1",
    description: "This is the first card",
    image: "./career.jpeg",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is the second card",
    image: "./career.jpeg",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is the third card",
    image: "./career.jpeg",
  },
];

function Task13() {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {cards.map((card) => (
        <div
          key={card.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            width: "200px",
            textAlign: "center",
          }}
        >
          <img
            src={card.image}
            alt={card.title}
            style={{ width: "100%", borderRadius: "4px" }}
          />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Task13;