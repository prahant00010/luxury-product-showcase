import { useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { FeaturedProducts } from "../components/FeaturedProducts";

export function LandingPage() {
  const navigate = useNavigate();
  const featured = products.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="page">
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Lumière Privée · Paris</p>
          <h1 className="heading heading--xl">
            Scents for rooms
            <br />
            that never raise their voice.
          </h1>
          <p className="body hero__body">
            Lumière Privée is a quiet house of haute parfumerie dedicated to those who collect
            memories the way others collect headlines. Each extrait is composed in Grasse in
            small numbered batches, using rare naturals, modern synthetics, and a refusal to
            chase trends. We design fragrances the way architects design spaces – for light,
            texture, and the way a moment feels hours after it has passed.
          </p>
          <div className="hero__actions">
            <button
              className="button"
              onClick={() => navigate("/collection")}
            >
              Explore the collection
            </button>
            <button
              className="button button--ghost"
              onClick={() => navigate("/collection/noir-atelier")}
            >
              View curator’s pick
            </button>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__image-shell">
            <img
              src="https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Perfume bottle on a marble plinth with soft evening light"
              className="hero__image"
            />
          </div>
        </div>
      </section>

      <section className="section section--bordered">
        <div className="section__header">
          <p className="eyebrow">The maison</p>
          <h2 className="heading heading--md">A house built on restraint</h2>
        </div>
        <div className="section__grid section__grid--split">
          <p className="body">
            Lumière Privée was founded for clients who measure luxury not in volume but in
            precision. Our perfumers work like tailors, cutting away anything unnecessary until
            only the most considered silhouette remains on skin.
          </p>
          <p className="body body--muted">
            We source from family-run distilleries in Grasse, work with traceable naturals and
            modern aroma-molecules, and age every concentrate before bottling. The result is a
            wardrobe of fragrances that feel soft-spoken yet impossibly present – the olfactive
            equivalent of a perfectly weighted coat or a room where every object has been
            chosen, not collected.
          </p>
        </div>
      </section>

      <FeaturedProducts products={featured} />
    </div>
  );
}

