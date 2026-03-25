import { useEffect, useState } from "react";
import Item from "./Item";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setItems(data.products.slice(0, 6)));
  }, []);

  return (
    <div className="container">
      <h1>🛍 Product Explorer</h1>

      <div className="grid">
        {items.map(product => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;