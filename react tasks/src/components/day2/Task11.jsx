import React, { useState } from "react";

function LastTask() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div
      style={{
        background: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>The current theme is {isDark ? "Dark" : "Light"}</p>
    </div>
  );
}

export default LastTask;