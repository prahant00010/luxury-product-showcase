import { Link } from "react-router-dom";

export function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/collection/${product.id}`} className="product-card__image-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
          loading="lazy"
        />
      </Link>
      <div className="product-card__body">
        <div className="product-card__top">
          <p className="eyebrow">{product.category}</p>
          <h3 className="heading heading--xs">{product.name}</h3>
          <p className="body body--muted">{product.shortDescription}</p>
        </div>
        <div className="product-card__bottom">
          <p className="price">₹{product.price.toLocaleString("en-IN")}</p>
          <Link to={`/collection/${product.id}`} className="text-link">
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}

