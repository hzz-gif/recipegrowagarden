'use client';

import { useState } from 'react';
import { Recipe } from '@/types/recipe';

interface RecipeSectionProps {
  recipes: Recipe[];
}

export default function RecipeSection({ recipes }: RecipeSectionProps) {
  const [activeRecipeId, setActiveRecipeId] = useState(recipes[0].id);
  const [selectedRarity, setSelectedRarity] = useState<string>('');

  const activeRecipe = recipes.find(recipe => recipe.id === activeRecipeId) || recipes[0];

  // Get unique rarities for the active recipe
  const getUniqueRarities = (recipe: Recipe) => {
    const rarities = recipe.variants.map(variant => variant.rarity);
    return Array.from(new Set(rarities));
  };

  // Get default rarity for a recipe (prismatic if available, otherwise highest rarity)
  const getDefaultRarity = (recipe: Recipe) => {
    const rarities = getUniqueRarities(recipe);
    if (rarities.includes('prismatic')) {
      return 'prismatic';
    }
    // Return the last rarity in the array (usually the highest)
    return rarities[rarities.length - 1];
  };

  // Filter variants based on selected rarity
  const getFilteredVariants = (recipe: Recipe) => {
    const currentRarity = selectedRarity || getDefaultRarity(recipe);
    return recipe.variants.filter(variant => variant.rarity === currentRarity);
  };

  // Reset rarity filter when recipe changes
  const handleRecipeChange = (recipeId: string) => {
    setActiveRecipeId(recipeId);
    setSelectedRarity('');
  };

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
                  onClick={() => handleRecipeChange(recipe.id)}
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
            <div className="recipe-title-row">
              <h3 className="recipe-title">{activeRecipe.emoji} {activeRecipe.name}</h3>
              <div className="recipe-meta">
                <span className="cook-time">⏱️ {activeRecipe.cookTime}</span>
                <span className={getRarityClass(activeRecipe.maxRarity)}>
                  Max: {activeRecipe.maxRarity.charAt(0).toUpperCase() + activeRecipe.maxRarity.slice(1)}
                </span>
                {activeRecipe.isMeta && <span className="meta-badge">👑 META</span>}
              </div>
            </div>

            {/* Rarity Filter Buttons - Only show if recipe has multiple variants */}
            {activeRecipe.variants.length > 6 && (
              <div className="rarity-filter">
                <div className="section-label">Filter by Rarity:</div>
                <div className="rarity-buttons">
                  {getUniqueRarities(activeRecipe).map((rarity) => {
                    const currentRarity = selectedRarity || getDefaultRarity(activeRecipe);
                    const isActive = currentRarity === rarity;
                    return (
                      <button
                        key={rarity}
                        onClick={() => setSelectedRarity(selectedRarity === rarity ? '' : rarity)}
                        className={`rarity-filter-btn ${isActive ? 'active' : ''} ${rarity}`}
                      >
                        {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <div className="recipe-content-grid">
            {getFilteredVariants(activeRecipe).map((variant, index) => {
              const getOrdinalNumber = (num: number) => {
                const ordinals = ['1st', '2nd', '3rd'];
                return ordinals[num] || `${num + 1}th`;
              };

              return (
                <div key={index} className={getRarityCardClass(variant.rarity)}>
                  <div className="rarity-card-header">
                    <h4 className="option-title">{getOrdinalNumber(index)} Option</h4>
                    <span className="rarity-badge">{variant.rarity.charAt(0).toUpperCase() + variant.rarity.slice(1)}</span>
                  </div>
                  <div className="rarity-card-content">
                    <div className="variant-ingredients">
                      {variant.ingredients.split(', ').map((ingredient, idx) => {
                        // Format ingredient to show quantity first: "1x Sugarglaze" instead of "Sugarglaze x1"
                        const formatted = ingredient.replace(/(.+?)\s*x\s*(\d+)/g, '$2x $1');
                        return (
                          <span key={idx} className="ingredient-item">
                            {formatted}
                            {idx < variant.ingredients.split(', ').length - 1 && ', '}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
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
