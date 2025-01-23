import React from "react";

function PD(props) {
    return (
        <div style={styles.card}>
            <h2>{props.productName}</h2>
            <p>Price: ${props.price}</p>
            <p>Description: {props.description}</p>
        </div>
    );
}


const styles = {
  card: {
    backgroundColor: "orange",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    maxWidth: "300px",
  },
};

export default PD;