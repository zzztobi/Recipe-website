import { useState } from "react";
import { CARD_COLORS } from "../data/recipes";
import "../styles/Recipe_style.css";

export default function RecipeCard({ recipe, index, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="recipe-card"
      style={
        hovered
          ? { transform: "translateY(-7px)", boxShadow: "0 22px 50px rgba(26,18,9,0.12)" }
          : {}
      }
      onClick={() => onClick(recipe, index)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image / emoji banner */}
      <div
        className="recipe-card__img"
        style={{ background: CARD_COLORS[index % CARD_COLORS.length] }}
      >
        <span className="recipe-card__emoji">{recipe.emoji}</span>
        <div className="recipe-card__overlay" />
        <div className="recipe-card__badge">{recipe.badge}</div>
      </div>

      {/* Card body */}
      <div className="recipe-card__body">
        <div className="recipe-card__tags">
          {recipe.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        <div className="recipe-card__title">{recipe.name}</div>
        <div className="recipe-card__desc">{recipe.desc}</div>

        <div className="recipe-card__meta">
          <div className="recipe-card__meta-item">
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            {recipe.time}
          </div>
          <div className="recipe-card__meta-item">
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
            </svg>
            {recipe.servings} servings
          </div>
          <div className="recipe-card__stars">★ {recipe.rating}</div>
        </div>
      </div>
    </div>
  );
}
