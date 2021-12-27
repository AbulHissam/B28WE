import React from "react";
import "./PriceCard.css";
import { CheckIcon, XIcon } from "@heroicons/react/solid";

function PriceCard({ plan }) {
  return (
    <div className="col-md-4">
      <div className="priceCard">
        <div className="priceCard__header ">
          <h5 className="priceCard__title text-muted">
            {plan.title.toUpperCase()}
          </h5>
          <h6 className="priceCard__price">
            ${plan.price}
            <span className="priceCard__period">/month</span>
          </h6>
        </div>
        <hr />
        <div className="priceCard__content">
          <ul>
            {plan.availableFeatures.map(({ title, isAvailable }, index) => {
              return (
                <li key={index} className={`${!isAvailable && "text-muted"}`}>
                  {isAvailable ? (
                    <CheckIcon className="priceCard__icon" />
                  ) : (
                    <XIcon className="priceCard__icon" />
                  )}
                  <p className="m-0">{title}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div class="d-grid">
          <a href="#" class="btn btn-primary text-uppercase">
            Button
          </a>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
