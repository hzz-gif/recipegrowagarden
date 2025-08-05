import { Recipe } from '@/types/recipe';

interface RecipeSidebarProps {
  recipes: Recipe[];
}

export default function RecipeSidebar({ recipes }: RecipeSidebarProps) {
  return (
    <aside className="recipe-sidebar">
      <h2 className="sidebar-title">🍽️ Recipe Categories</h2>
      <nav className="recipe-nav">
        <ul className="recipe-list">
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <a href={`#recipe-${recipe.id}`} className="recipe-link">
                {recipe.emoji} {recipe.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
