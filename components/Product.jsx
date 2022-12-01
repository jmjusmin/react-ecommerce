import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useStateContext } from "../context/StateContext";

function Product({ product: { image, name, slug, price }, product }) {
  //destructue from context
  const { onAdd } = useStateContext();

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
            alt={`${name}-img`}
          />
          <p className="product-name">{name}</p>
          <div className="product-priceDiv">
            <p className="product-price">${price}</p>
            <BsFillCartPlusFill
              className="product-priceIcon"
              onClick={() => onAdd(product, 1)}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
