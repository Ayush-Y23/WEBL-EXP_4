import { useState } from "react";

function Item({ product }) {

  const [show, setShow] = useState(false);

  return (
    <div className="card">

      <h2>{product.title}</h2>

      <button
        className="btn"
        onClick={() => setShow(!show)}
      >
        {show ? "Hide Details" : "View Product"}
      </button>

      {show && (
        <div className="details">

          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-img"
          />

          <h3>💰 Price: ${product.price}</h3>

          <p>{product.description}</p>

          <p className="brand">Brand: {product.brand}</p>

          <p className="rating">
            ⭐ Rating: {product.rating}
          </p>

        </div>
      )}

    </div>
  );
}

export default Item;