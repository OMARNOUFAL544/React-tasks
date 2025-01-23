import React, { Component } from "react";

class X extends Component {
  render() {
    const { avatar, name, email } = this.props;

    return (
      <div style={styles.card}>
        <img src={avatar}style={styles.avatar} />
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.email}>{email}</p>
      </div>
    );
  }
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    maxWidth: "300px",
    textAlign: "center",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  name: {
    fontSize: "1.5em",
    margin: "0",
  },
  email: {
    color: "#555",
  },
};

export default X;