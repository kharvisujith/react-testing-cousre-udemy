import React from "react";
export function ListComponents({ Marvel, DC }) {
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div style={{ width: "25%", margin: "auto" }}>
        <ul style={{ listStyleType: "none", textAlign: "left" }}>
          <h6>Marvel SuperHeroes</h6>
          {Marvel.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </div>
      <div style={{ width: "25%", margin: "auto" }}>
        <ul style={{ listStyleType: "none", textAlign: "left" }}>
          <h6>DC SuperHeroes</h6>
          {DC.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
