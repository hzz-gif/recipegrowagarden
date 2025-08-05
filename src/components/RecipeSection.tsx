'use client';

import { useState } from 'react';
import { Recipe } from '@/types/recipe';

interface RecipeSectionProps {
  recipes: Recipe[];
}

export default function RecipeSection({ recipes }: RecipeSectionProps) {
  const [activeRecipeId, setActiveRecipeId] = useState(recipes[0].id);

  const activeRecipe = recipes.find(recipe => recipe.id === activeRecipeId) || recipes[0];

  const getRarityClass = (rarity: string) => {
    return `max-rarity ${rarity}`;
  };

  const getRarityCardClass = (rarity: string) => {
    return `rarity-card ${rarity}`;
  };

  return (
    <main className="main-content" id="recipes">
      {/* Left Sidebar */}
      <aside className="recipe-sidebar">
        <h2 className="sidebar-title">🍽️ Recipe Categories</h2>
        <nav className="recipe-nav">
          <ul className="recipe-list">
            {recipes.map((recipe) => (
              <li key={recipe.id}>
                <button
                  onClick={() => setActiveRecipeId(recipe.id)}
                  className={`recipe-link ${activeRecipeId === recipe.id ? 'active' : ''}`}
                >
                  {recipe.emoji} {recipe.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Right Content Area */}
      <section className="recipe-details">
        <div className="recipe-card active">
          <div className="recipe-header">
            <h3 className="recipe-title">{activeRecipe.emoji} {activeRecipe.name}</h3>
            <div className="recipe-meta">
              <span className="cook-time">⏱️ {activeRecipe.cookTime}</span>
              <span className={getRarityClass(activeRecipe.maxRarity)}>
                Max: {activeRecipe.maxRarity.charAt(0).toUpperCase() + activeRecipe.maxRarity.slice(1)}
              </span>
              {activeRecipe.isMeta && <span className="meta-badge">👑 META</span>}
            </div>
          </div>
          <div className="recipe-content-grid">
            {activeRecipe.variants.map((variant, index) => (
              <div key={index} className={getRarityCardClass(variant.rarity)}>
                <div className="rarity-card-header">
                  <h4 className="rarity-title">{variant.rarity.charAt(0).toUpperCase() + variant.rarity.slice(1)}:</h4>
                </div>
                <div className="rarity-card-content">
                  <div className="variant-ingredients">{variant.ingredients}</div>
                </div>
              </div>
            ))}
          </div>
          {activeRecipe.exclusiveRewards && (
            <div className="exclusive-rewards">
              <div className="section-label">Exclusive Rewards:</div>
              <p>{activeRecipe.exclusiveRewards}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
