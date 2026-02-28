import { Link } from "react-router-dom";

export function FeaturedProducts({ products }) {
  if (!products?.length) return null;

  return (
    <section className="section section--soft">
      <div className="section__header">
        <p className="eyebrow">Featured Extraits</p>
        <h2 className="heading heading--md">Curated for candlelit hours</h2>
        <p className="body body--muted">
          A trio of signatures that capture the quiet luxury of Lumière Privée – from
          sun-warmed terraces to midnight salons.
        </p>
      </div>
      <div className="featured-grid">
        {products.map((product) => (
          <article key={product.id} className="featured-card">
            <div className="featured-card__media">
              <img
                src={product.image}
                alt={product.name}
                className="featured-card__image"
                loading="lazy"
              />
            </div>
            <div className="featured-card__body">
              <p className="eyebrow">{product.category}</p>
              <h3 className="heading heading--xs">{product.name}</h3>
              <p className="body">{product.shortDescription}</p>
              <p className="body body--muted">{product.fullDescription}</p>
              <div className="featured-card__meta">
                <p className="price">₹{product.price.toLocaleString("en-IN")}</p>
                <Link to={`/collection/${product.id}`} className="button button--subtle">
                  View extrait
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

