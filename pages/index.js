import React from "react";

function Home() {
  return (
    <>
      HeroBanner
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many vaiations</p>
      </div>
      <div className="products-container">{["p1", "p2"].map((p) => p)}</div>
      Footer
    </>
  );
}

export default Home;
