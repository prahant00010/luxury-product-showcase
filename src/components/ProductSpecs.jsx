export function ProductSpecs({ product }) {
  const { fragranceNotes, longevity, size, occasion } = product;

  return (
    <section className="specs">
      <h2 className="heading heading--xs specs__title">Fragrance architecture</h2>
      <dl className="specs__grid">
        <div className="specs__item">
          <dt className="specs__label">Top notes</dt>
          <dd className="specs__value">{fragranceNotes.top}</dd>
        </div>
        <div className="specs__item">
          <dt className="specs__label">Heart</dt>
          <dd className="specs__value">{fragranceNotes.heart}</dd>
        </div>
        <div className="specs__item">
          <dt className="specs__label">Base</dt>
          <dd className="specs__value">{fragranceNotes.base}</dd>
        </div>
        <div className="specs__item">
          <dt className="specs__label">Size</dt>
          <dd className="specs__value">{size}</dd>
        </div>
        <div className="specs__item">
          <dt className="specs__label">Longevity</dt>
          <dd className="specs__value">{longevity}</dd>
        </div>
        <div className="specs__item">
          <dt className="specs__label">Occasion</dt>
          <dd className="specs__value">{occasion}</dd>
        </div>
      </dl>
    </section>
  );
}

