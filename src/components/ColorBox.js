import React, { useState } from 'react';

const ColorBox = () => {
  const [color, setColor] = useState("")
  return (
    <div align="center">
      <br />
      <div style={{ backgroundColor: color, height: "150px", width: "165px", border: "1px solid #ccc" }}>
      </div>
      <br></br>
      <input type="text" style={{ border: "2px solid #333", borderRadius: "5px", padding: "5px", fontWeight: "bold" }}
        onChange={(e) => { setColor(e.target.value) }} placeholder="Color name/Code" />

    </div>
  );
}

export default ColorBox;