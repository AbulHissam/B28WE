import React from "react";
import Card from "./Card";

function Product({ handleCartCount }) {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <Card
            title="Fancy product"
            price="$40.00 - $80.00"
            handleCartCount={handleCartCount}
          />
          <Card
            title="Special item"
            price="$18.00"
            mutedPrice="$20.00"
            rated={true}
            handleCartCount={handleCartCount}
          />
          <Card
            title="Sale item"
            price="$25.00"
            mutedPrice="$50.00"
            handleCartCount={handleCartCount}
          />
          <Card
            title="Popular item"
            price="$40.00"
            rated={true}
            handleCartCount={handleCartCount}
          />
          <Card
            title="Sale item"
            price="$25.00"
            mutedPrice="$50.00"
            handleCartCount={handleCartCount}
          />
          <Card
            title="Fancy product"
            price="$120.00 - $180.00"
            handleCartCount={handleCartCount}
          />
          <Card
            title="Special item"
            price="$18.00"
            mutedPrice="$20.00"
            rated={true}
            handleCartCount={handleCartCount}
          />
          <Card
            title="FPopular item"
            price="$40.00"
            rated={true}
            handleCartCount={handleCartCount}
          />
        </div>
      </div>
    </section>
  );
}

export default Product;
