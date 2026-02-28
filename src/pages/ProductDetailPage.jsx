import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { ProductSpecs } from "../components/ProductSpecs";

export function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="page page--centered">
        <div className="card card--soft">
          <p className="eyebrow">Unavailable</p>
          <h1 className="heading heading--md">This composition isn’t bottled yet.</h1>
          <p className="body body--muted">
            The fragrance you were looking for could not be found. It may have sold out or never
            existed. Explore the current collection to discover your next signature.
          </p>
          <div className="card__actions">
            <button className="button" onClick={() => navigate("/collection")}>
              View collection
            </button>
            <button className="button button--ghost" onClick={() => navigate("/")}>
              Return to maison
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <section className="section">
        <button className="text-link text-link--back" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <div className="detail-grid">
          <div className="detail-grid__media">
            <div className="detail-grid__image-shell">
              <img
                src={product.image}
                alt={product.name}
                className="detail-grid__image"
              />
            </div>
          </div>
          <div className="detail-grid__content">
            <p className="eyebrow">{product.category}</p>
            <h1 className="heading heading--lg">{product.name}</h1>
            <p className="price price--large">₹{product.price.toLocaleString("en-IN")}</p>
            <p className="body">{product.fullDescription}</p>
            <p className="body body--muted">
              Each bottle is hand-filled in our Paris atelier and numbered by batch. We recommend
              two sprays on pulse points, never directly on clothing, and a moment’s stillness to
              let the structure reveal itself.
            </p>
            <ProductSpecs product={product} />
          </div>
        </div>
      </section>
    </div>
  );
}

