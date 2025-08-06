import { recipes } from '@/data/recipes';
import Navigation from '@/components/Navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prismatic Recipe Grow a Garden - Prismatic Pizza, Sushi & More',
  description: 'Master the ultimate Prismatic Recipe collection in Grow a Garden! Discover verified recipes for Prismatic Pizza, Prismatic Cake, Prismatic Sushi and more.',
  openGraph: {
    title: 'Prismatic Recipe Grow a Garden - Ultimate Cooking Guide',
    description: 'Complete collection of verified Prismatic Recipe combinations including Prismatic Pizza, Prismatic Burger, Prismatic Cake, and Prismatic Sushi. Master the highest tier cooking in Grow a Garden!',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prismatic Recipe Grow a Garden - Premium Cooking Guide',
    description: 'Discover all Prismatic Recipe combinations: Prismatic Pizza, Prismatic Burger, Prismatic Cake, Prismatic Sushi & more. Get maximum rewards with verified ingredients!',
  }
};

export default function PrismaticRecipesPage() {
  // Get all prismatic variants from all recipes
  const prismaticRecipes = recipes
    .map(recipe => ({
      ...recipe,
      prismaticVariants: recipe.variants.filter(variant => variant.rarity === 'prismatic')
    }))
    .filter(recipe => recipe.prismaticVariants.length > 0);

  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        {/* Header */}
        <div className="hero-section">
          <div className="hero-content text-center">
            <h1 className="main-title">✨ Prismatic Recipes Grow a Garden ✨</h1>
            <p className="hero-subtitle">
              Discover the most valuable and rare recipes in Grow a Garden!
            </p>
          </div>
        </div>

        {/* Prismatic Recipes Grid */}
        <div className="prismatic-container">
          <div className="prismatic-grid">
            {prismaticRecipes.map((recipe) => (
              <div key={recipe.id} className="prismatic-recipe-card">
                <div className="prismatic-card-header">
                  <h2 className="prismatic-recipe-title">
                    {recipe.emoji} Prismatic {recipe.name}
                  </h2>
                  <div className="prismatic-meta">
                    <span className="cook-time">⏱️ {recipe.cookTime}</span>
                    <span className="prismatic-badge">✨ PRISMATIC</span>
                  </div>
                </div>

                <div className="prismatic-variants">
                  {recipe.prismaticVariants.map((variant, index) => (
                    <div key={index} className="prismatic-variant">
                      <div className="variant-header">
                        <span className="variant-number">Option {index + 1}</span>
                      </div>
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
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Description Section - At the bottom of the page */}
      <div className="prismatic-description-section">
        <div className="description-container">
          <div className="description-grid">

            {/* Section 1: What are Prismatic Recipes? */}
            <div className="description-card">
              <div className="card-icon">✨</div>
              <h2 className="section-title">What are Prismatic Recipes?</h2>
              <p className="section-text">
                Prismatic Recipes represent the pinnacle of culinary achievement in Grow a Garden, offering the highest tier of cooking rewards available. These extraordinary Prismatic Recipes require rare ingredients like Bone Blossom and provide unmatched benefits to dedicated players. Our comprehensive Prismatic Recipe guide covers every aspect of creating these premium dishes, from ingredient selection to advanced cooking techniques that guarantee success with every Prismatic Recipe attempt.
              </p>
            </div>

            {/* Section 2: Benefits & Rewards */}
            <div className="description-card">
              <div className="card-icon">🎁</div>
              <h2 className="section-title">Prismatic Recipe Premium Rewards & Benefits</h2>
              <p className="section-text">
                Our meticulously tested Prismatic Recipe combinations guarantee premium rewards including Gourmet Seed Packs, exclusive eggs, and rare items from Chris P&apos;s reward pool. Each Prismatic Recipe delivers maximum value for your rare ingredients, ensuring that every cooking session yields the best possible outcomes. Players who master these Prismatic Recipe techniques consistently achieve higher success rates and better rewards than standard cooking methods.
              </p>
            </div>

            {/* Section 3: Our Special Features */}
            <div className="description-card">
              <div className="card-icon">🏆</div>
              <h2 className="section-title">Prismatic Recipe Verified & Optimized</h2>
              <p className="section-text">
                What makes our Prismatic Recipe collection special is the verified authenticity and optimal ingredient ratios. Each Prismatic Recipe combination has been community-tested to ensure maximum rarity output, distinguishing them from lower-tier Divine or Mythical alternatives. Our detailed Prismatic Recipe guides provide step-by-step instructions, ingredient lists, and cooking tips that help players unlock the full potential of Grow a Garden&apos;s advanced cooking system and achieve consistent Prismatic Recipe results.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
