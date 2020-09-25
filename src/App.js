import React, { useState, useEffect } from "react";

function App() {
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/shoe/")
      .then((res) => res.json())
      .then((data) => setShoes(data));
  });

  return (
    <>
      {shoes.map((shoe) => (
        <>
          <h3>{shoe.brand_name}</h3>
          <ul>
            <li>{shoe.size}</li>
            <li>{shoe.manufacturer}</li>
            <li>{shoe.color}</li>
            <li>{shoe.material}</li>
            <li>{shoe.shoe_type}</li>
            <li>{shoe.fasten_type}</li>
          </ul>
        </>
      ))}
    </>
  );
}

export default App;
