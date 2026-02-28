import React from "react";
import { products as allProducts } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { FilterBar } from "../components/FilterBar";

export function ProductListingPage() {
  const [filters, setFilters] = React.useState({
    category: "all",
    sort: "recommended"
  });

  const filtered = React.useMemo(() => {
    let next = [...allProducts];

    if (filters.category !== "all") {
      next = next.filter((p) => p.mood === filters.category);
    }

    if (filters.sort === "low-to-high") {
      next.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "high-to-low") {
      next.sort((a, b) => b.price - a.price);
    } else {
      next.sort((a, b) => (b.featured === true) - (a.featured === true));
    }

    return next;
  }, [filters]);

  return (
    <div className="page">
      <header className="section section--soft">
        <div className="section__header">
          <p className="eyebrow">The collection</p>
          <h1 className="heading heading--lg">A wardrobe of quiet statements</h1>
          <p className="body body--muted">
            Each composition is designed to dress a different hour – from sharp daylight clarity
            to the velvet of after-midnight rooms.
          </p>
        </div>
        <FilterBar
          category={filters.category}
          sort={filters.sort}
          onChange={setFilters}
        />
      </header>

      <section className="section">
        <div className="product-grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

