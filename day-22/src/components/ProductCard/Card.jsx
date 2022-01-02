import React, { useState } from "react";
import "./Card.css";
import Rating from "./Rating";

function Card({ title, price, mutedPrice, rated, handleCartCount }) {
  const [addedToCart, setAddedToCart] = useState(false);
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="card-image"
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{title}</h5>
            {rated && <Rating />}
            {mutedPrice && (
              <span className="text-muted text-decoration-line-through">
                {mutedPrice}
              </span>
            )}
            {price}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          {!addedToCart && (
            <div className="text-center">
              <button
                className="btn btn-dark mt-auto"
                onClick={() => {
                  handleCartCount("add");
                  setAddedToCart(true);
                }}
              >
                Add to Cart
              </button>
            </div>
          )}
          {addedToCart && (
            <div className="text-center">
              <button
                className="btn btn-secondary mt-auto"
                onClick={() => {
                  handleCartCount();
                  setAddedToCart(false);
                }}
              >
                Remove from Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
