export default function RecipeInfo() {
  return (
    <section className="recipe-info">
      <div className="info-section" id="guide">
        <h2 className="info-title">🌱 What are Grow a Garden Recipes?</h2>
        <p className="info-content">
          Grow a Garden Recipes are special cooking combinations that allow players to transform their harvested crops into delicious dishes.
          Introduced in the Trading and Cooking Event Update, this comprehensive Grow a Garden Recipes system lets you feed Chris P. Bacon (the cooking NPC) with various ingredient
          combinations to create everything from hot dogs to elaborate cakes. Each Grow a Garden Recipes entry requires specific crops grown in your garden, and the
          rarity and size of your ingredients directly impact the quality and rewards of your finished dishes.
        </p>
      </div>

      <div className="info-section">
        <h2 className="info-title">🍳 How Grow a Garden Recipes Work</h2>
        <p className="info-content">
          The Grow a Garden Recipes cooking system operates through cooking pots where you combine harvested crops to create specific dishes. To cook, simply approach
          a cooking pot, add your ingredients, and wait for the cooking timer to complete. Each Grow a Garden Recipes entry has a designated cooking time ranging from
          4 to 10 minutes. The magic happens when you feed your cooked dishes to Chris P. Bacon - he has cravings that change every hour, and
          satisfying his specific desires yields significantly better rewards. The Grow a Garden Recipes system rewards experimentation, as discovering new ingredient
          combinations unlocks powerful recipes that can produce prismatic-quality dishes.
        </p>
      </div>

      <div className="info-section" id="tips">
        <h2 className="info-title">💡 Pro Tips for Grow a Garden Recipes</h2>
        <div className="tips-list">
          <div className="tip-item">
            <span className="tip-icon">🎯</span>
            <p><strong>Monitor Chris P. Bacon&apos;s Cravings:</strong> His food preferences change hourly, so timing your Grow a Garden Recipes cooking to match his cravings maximizes your rewards.</p>
          </div>
          <div className="tip-item">
            <span className="tip-icon">⭐</span>
            <p><strong>Use High-Rarity Ingredients:</strong> Mythical and Divine crops produce significantly better dishes than common ingredients, leading to prismatic-quality rewards.</p>
          </div>
          <div className="tip-item">
            <span className="tip-icon">🔄</span>
            <p><strong>Experiment with Mutations:</strong> Mutated crops often create unique Grow a Garden Recipes variations that can unlock exclusive rewards and rare pets like the Mochi Mouse.</p>
          </div>
          <div className="tip-item">
            <span className="tip-icon">⚡</span>
            <p><strong>Optimize Cooking Times:</strong> Plan your Grow a Garden Recipes cooking sessions around your play schedule - some recipes take up to 10 minutes, so start them before taking breaks.</p>
          </div>
        </div>
      </div>

      <div className="info-section" id="rewards">
        <h2 className="info-title">🏆 Grow a Garden Recipes Reward System</h2>
        <p className="info-content">
          The Grow a Garden Recipes reward system is tiered based on dish quality and rarity. Basic Grow a Garden Recipes yield standard rewards like Sheckles and common items,
          while high-rank prismatic dishes can reward you with exclusive pets (Bagel Bunny, Sushi Bear, French Fry Ferret), rare decorative
          items from Food Crates, and powerful tools like the Grandmaster Sprinkler. Special Grow a Garden Recipes rewards include Gourmet Seed Packs containing
          unique crops like Grand Tomato and Crown Melon, Gourmet Eggs that hatch food-themed pets, and exclusive mutation sprays. The most
          coveted Grow a Garden Recipes rewards come from satisfying Chris P. Bacon&apos;s specific cravings with prismatic-quality dishes, which can yield up to 50,000+
          Sheckles and unlock access to the game&apos;s rarest collectibles.
        </p>
      </div>
    </section>
  );
}
