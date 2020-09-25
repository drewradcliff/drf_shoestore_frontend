import React, { useState, useEffect } from "react";

function App() {
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/shoe/")
      .then((res) => res.json())
      .then((data) => setShoes(data));
  }, []);

  return (
    <>
      {shoes.map((shoe, i) => (
        <div key={i}>
          <h3>{shoe.brand_name}</h3>
          <ul>
            <li>Size: {shoe.size}</li>
            <li>Manufacturer: {shoe.manufacturer}</li>
            <li>Color: {shoe.color}</li>
            <li>Material: {shoe.material}</li>
            <li>Type: {shoe.shoe_type}</li>
            <li>Fasten type: {shoe.fasten_type}</li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default App;
