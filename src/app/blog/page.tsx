import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Grow a Garden Recipes Blog - Latest Tips & Updates",
  description: "Stay updated with the latest Grow a Garden recipe tips, cooking strategies, and game updates. Your ultimate source for mastering the cooking system.",
  alternates: {
    canonical: 'https://recipegrowagarden.com/blog',
  },
};

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <div className="container">
        <header className="blog-header">
          <h1 className="blog-title">🌱 Grow a Garden Recipes Blog</h1>
          <p className="blog-subtitle">Latest tips, strategies, and updates for mastering every recipe!</p>
        </header>

        <main className="blog-content">
          <article className="blog-post">
            <h2 className="post-title">🍕 Mastering Prismatic Pizza: The Ultimate Meta Recipe</h2>
            <div className="post-meta">
              <span className="post-date">📅 January 2025</span>
              <span className="post-category">🏷️ Advanced Tips</span>
            </div>
            <div className="post-content">
              <p>
                Pizza has become the most sought-after recipe in Grow a Garden, and for good reason! This prismatic-quality 
                dish can yield over 50,000 Sheckles and unlock exclusive rewards. Here&apos;s everything you need to know about
                mastering this META recipe.
              </p>
              <h3>Essential Ingredients for Prismatic Pizza</h3>
              <p>
                To create a prismatic pizza, you&apos;ll need: Giant Pinecone + Corn + Apple + Pepper + Strawberry.
                The key is ensuring all your ingredients are high-rarity mutations for maximum effectiveness.
              </p>
            </div>
          </article>

          <article className="blog-post">
            <h2 className="post-title">🍣 Sushi Secrets: Unlocking the Mochi Mouse Pet</h2>
            <div className="post-meta">
              <span className="post-date">📅 December 2024</span>
              <span className="post-category">🏷️ Pet Guide</span>
            </div>
            <div className="post-content">
              <p>
                The Mochi Mouse is one of the most exclusive pets in Grow a Garden, obtainable only through cooking 
                prismatic-quality sushi. This adorable companion not only looks amazing but also provides unique benefits 
                for your garden.
              </p>
              <h3>Sushi Recipe for Success</h3>
              <p>
                Use 4x Bamboo + 1x Corn, but make sure your bamboo crops are mutated for the best chance at prismatic quality. 
                The cooking time is 7 minutes, so plan accordingly!
              </p>
            </div>
          </article>

          <article className="blog-post">
            <h2 className="post-title">🧇 Waffle Wisdom: Gourmet Eggs and Premium Rewards</h2>
            <div className="post-meta">
              <span className="post-date">📅 November 2024</span>
              <span className="post-category">🏷️ Cooking Strategy</span>
            </div>
            <div className="post-content">
              <p>
                Waffles might seem simple, but they&apos;re your gateway to Gourmet Eggs and some of the game&apos;s most valuable
                rewards. With the right strategy, waffles can become a consistent source of premium items.
              </p>
              <h3>Optimal Waffle Strategy</h3>
              <p>
                Start with Pumpkin + Sugar Apple for basic waffles, then upgrade to the high-rank recipe using 
                3x Orange Tulip + Pumpkin + Watermelon + Orange Tulip for prismatic results.
              </p>
            </div>
          </article>

          <div className="blog-cta">
            <h3>🎮 Ready to Try These Recipes?</h3>
            <p>Jump into Grow a Garden and start cooking these amazing dishes!</p>
            <a href="https://www.roblox.com/games/6430220996/Grow-a-Garden" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="cta-button">
              Play Grow a Garden Now
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
