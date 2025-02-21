import React, { useState } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const Heading = () => {
  return (
    <h1 style={{ marginTop: "20px", color: "#333", textAlign: "center" }}>
      AUTO COLOR CHANGE
    </h1>
  );
};

const Box = () => {
  const [bgColor, setBgColor] = useState("red");

  return (
    <div style={{ textAlign: "center", paddingTop: "20px" }}>
      <div
        style={{
          width: "200px",
          height: "200px",
          margin: "20px auto",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#fff",
          backgroundColor: bgColor,
          transition: "background-color 0.5s ease-in-out",
        }}
      >
        {bgColor}
      </div>
      <input
        type="text"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
        style={{
          width: "60%",
          padding: "8px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          textAlign: "center",
          outline: "none",
        }}
      />
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Heading />
    <Box />
  </StrictMode>
);
