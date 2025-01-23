import React from "react";

function B({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

export default B;