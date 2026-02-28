import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { LandingPage } from "./pages/LandingPage";
import { ProductListingPage } from "./pages/ProductListingPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const navigate = useNavigate();

  return (
    <Layout onViewCollection={() => navigate("/collection")}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/collection" element={<ProductListingPage />} />
        <Route path="/collection/:id" element={<ProductDetailPage />} />
        <Route
          path="*"
          element={
            <div className="page page--centered">
              <div className="card card--soft">
                <p className="eyebrow">404</p>
                <h1 className="heading heading--md">This page feels unfamiliar.</h1>
                <p className="body body--muted">
                  The link you followed does not exist. Return to our curated collection and begin again.
                </p>
                <button className="button" onClick={() => navigate("/")}>
                  Back to Maison
                </button>
              </div>
            </div>
          }
        />
      </Routes>
    </Layout>
  );
}

