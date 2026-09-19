import { useEffect } from "react";
import { CARD_COLORS } from "../data/recipes";
import "../styles/Recipe_style.css";

export default function RecipeModal({ recipe, index, onClose }) {
  // Close on Escape key + lock body scroll
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!recipe) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal">
        {/* Hero banner */}
        <div
          className="modal__hero"
          style={{ background: CARD_COLORS[index % CARD_COLORS.length] }}
        >
          <span>{recipe.emoji}</span>
          <button className="modal__close" onClick={onClose}>✕</button>
        </div>

        <div className="modal__body">
          <h2 className="modal__title">{recipe.name}</h2>
          <p className="modal__nepali">{recipe.nepali} — {recipe.badge}</p>

          <div className="modal__tags">
            {recipe.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          {/* Meta info row */}
          <div className="modal__meta-row">
            {[
              ["Time",       recipe.time],
              ["Servings",   recipe.servings],
              ["Difficulty", recipe.difficulty],
              ["Rating",     `★ ${recipe.rating}`],
            ].map(([label, val]) => (
              <div key={label} className="modal__meta-item">
                <div className="modal__meta-label">{label}</div>
                <div className="modal__meta-val">{val}</div>
              </div>
            ))}
          </div>

          <p className="modal__desc">{recipe.longDesc}</p>

          {/* Ingredients */}
          <h3 className="modal__section-title">Ingredients</h3>
          <div className="ingredients-grid">
            {recipe.ingredients.map((ing, i) => (
              <div key={i} className="ingredient-chip">
                <div className="ingredient-chip__dot" />
                {ing}
              </div>
            ))}
          </div>

          {/* Steps */}
          <h3 className="modal__section-title">Instructions</h3>
          <ol className="steps-list">
            {recipe.steps.map((step, i) => (
              <li key={i} className="step-item">
                <div className="step-item__num">{i + 1}</div>
                <div className="step-item__text">{step}</div>
              </li>
            ))}
          </ol>

          {/* Tip */}
          <div className="tip-box">
            <span className="tip-box__label">Chef's Tip</span>
            {recipe.tip}
          </div>
        </div>
      </div>
    </div>
  );
}
