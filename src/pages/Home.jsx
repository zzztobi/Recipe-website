import { useState, useMemo } from "react";
import { RECIPES, CATEGORIES } from "../data/recipes";
import RecipeCard from "../components/RecipeCard";
import RecipeModal from "../components/RecipeModal";
import "../styles/Home_style.css";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selected, setSelected]         = useState(null);
  const [selectedIdx, setSelectedIdx]   = useState(0);

  // Filter recipes based on active category
  const filtered = useMemo(() => {
    if (activeFilter === "all") return RECIPES;
    return RECIPES.filter((r) => r.category === activeFilter);
  }, [activeFilter]);

  function handleCardClick(recipe, index) {
    setSelected(recipe);
    setSelectedIdx(index);
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <svg className="hero__mandala" viewBox="0 0 500 500" fill="none">
          <g stroke="#C0392B" strokeWidth="1">
            <circle cx="250" cy="250" r="240" /><circle cx="250" cy="250" r="200" />
            <circle cx="250" cy="250" r="160" /><circle cx="250" cy="250" r="120" />
            <circle cx="250" cy="250" r="80"  /><circle cx="250" cy="250" r="40"  />
            <line x1="10"  y1="250" x2="490" y2="250" />
            <line x1="250" y1="10"  x2="250" y2="490" />
            <line x1="80"  y1="80"  x2="420" y2="420" />
            <line x1="420" y1="80"  x2="80"  y2="420" />
            <line x1="10"  y1="150" x2="490" y2="350" />
            <line x1="10"  y1="350" x2="490" y2="150" />
            <line x1="150" y1="10"  x2="350" y2="490" />
            <line x1="350" y1="10"  x2="150" y2="490" />
          </g>
        </svg>

        <p className="hero__eyebrow">Authentic Nepali Cuisine</p>

        <h1 className="hero__title">
          Taste the<br /><em>Himalayas</em>
        </h1>

        <p className="hero__subtitle">
          Recipes passed down through generations — from the bustling streets of
          Kathmandu to your kitchen.
        </p>

        <a href="#recipes" className="hero__cta">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
          Explore Recipes
        </a>

        <div className="hero__stats">
          <div className="stat">
            <div className="stat__num">10</div>
            <div className="stat__label">Recipes</div>
          </div>
          <div className="stat__divider" />
          <div className="stat">
            <div className="stat__num">5</div>
            <div className="stat__label">Categories</div>
          </div>
          <div className="stat__divider" />
          <div className="stat">
            <div className="stat__num">🇳🇵</div>
            <div className="stat__label">Authentic</div>
          </div>
        </div>

        <div className="hero__scroll">
          <span>Scroll</span>
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <div className="filter-bar">
        <div className="filter-bar__inner">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              className={`filter-btn${activeFilter === cat.value ? " filter-btn--active" : ""}`}
              onClick={() => setActiveFilter(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Recipe Grid ── */}
      <section id="recipes" className="recipes-section">
        <h2 className="recipes-section__heading">Nepali Recipes</h2>
        <p className="recipes-section__sub">
          Showing {filtered.length} {filtered.length === 1 ? "recipe" : "recipes"}
        </p>

        <div className="recipe-grid">
          {filtered.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state__icon">🍽️</div>
              <h3 className="empty-state__title">No recipes found</h3>
              <p>Try a different category.</p>
            </div>
          ) : (
            filtered.map((recipe, index) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                index={index}
                onClick={handleCardClick}
              />
            ))
          )}
        </div>
      </section>

      {/* ── Modal ── */}
      {selected && (
        <RecipeModal
          recipe={selected}
          index={selectedIdx}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}
