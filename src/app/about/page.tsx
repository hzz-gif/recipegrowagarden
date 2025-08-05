import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About - Grow a Garden Recipes Guide',
  description: 'Learn about our comprehensive Grow a Garden recipes guide, the game\'s history, and our mission to help players master every cooking recipe.',
};

export default function About() {
  return (
    <>
      <Navigation />
      <div className="container">
        <main className="about-page">
          <header className="about-header">
            <h1 className="about-title">🌱 About Grow a Garden Recipes</h1>
            <p className="about-subtitle">
              Your ultimate guide to mastering every recipe in the world&apos;s most popular farming game
            </p>
          </header>

          <section className="about-content">
            <div className="about-section">
              <h2 className="section-title">🎮 About Grow a Garden</h2>
              <p className="section-text">
                Grow a Garden is a revolutionary idle farming simulator released on Roblox on March 26, 2025. 
                Created by a talented 16-year-old developer known as &quot;BMWLux&quot; and later developed by Splitting Point Studios
                led by Janzen &quot;Jandel&quot; Madsen, this game has shattered every record in gaming history.
              </p>
              <p className="section-text">
                The game achieved an unprecedented 21.9 million concurrent players, surpassing even Fortnite&apos;s previous
                record of 15.3 million. What started as a simple three-day project has become a global phenomenon,
                attracting players of all ages to its charming farming mechanics and cooking system.
              </p>
            </div>

            <div className="about-section">
              <h2 className="section-title">🍳 About Our Recipe Guide</h2>
              <p className="section-text">
                Our comprehensive Grow a Garden Recipes guide was created to help players navigate the complex cooking 
                system introduced in the Trading and Cooking Event Update. We provide detailed information about all 
                12 cooking recipes, from basic soups to prismatic pizzas.
              </p>
              <p className="section-text">
                Each recipe entry includes accurate cooking times, ingredient combinations for different rarity levels, 
                and detailed reward information. Our data is sourced from the most reliable gaming publications and 
                continuously updated to reflect the latest game changes.
              </p>
            </div>

            <div className="about-section">
              <h2 className="section-title">🎯 Our Mission</h2>
              <p className="section-text">
                We believe that every Grow a Garden player deserves access to accurate, comprehensive recipe information. 
                Our mission is to provide the most complete and up-to-date cooking guide available, helping players 
                maximize their rewards and enjoy the full potential of Chris P. Bacon&apos;s cooking system.
              </p>
              <p className="section-text">
                Whether you&apos;re a beginner learning to make your first hot dog or an experienced player seeking
                prismatic-quality dishes, our guide provides the knowledge you need to succeed in your culinary journey.
              </p>
            </div>

            <div className="about-section">
              <h2 className="section-title">📊 Game Statistics</h2>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">21.9M</div>
                  <div className="stat-label">Peak Concurrent Players</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">21B+</div>
                  <div className="stat-label">Total Game Visits</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">12</div>
                  <div className="stat-label">Cooking Recipes</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">35%</div>
                  <div className="stat-label">Players Under 13</div>
                </div>
              </div>
            </div>

            <div className="about-section">
              <h2 className="section-title">🌟 Why Grow a Garden Matters</h2>
              <p className="section-text">
                Grow a Garden represents a new era in gaming, proving that simple, well-designed gameplay can capture 
                the hearts of millions. The game&apos;s success has influenced Roblox&apos;s stock prices, attracted mainstream
                media attention, and demonstrated the power of community-driven gaming experiences.
              </p>
              <p className="section-text">
                The cooking system, featuring Chris P. Bacon and his hourly cravings, adds strategic depth to the 
                farming mechanics. Players must time their cooking sessions, experiment with ingredient combinations, 
                and manage resources to achieve the coveted prismatic-quality dishes.
              </p>
            </div>

            <div className="about-section">
              <h2 className="section-title">🤝 Community & Support</h2>
              <p className="section-text">
                This guide is created by fans, for fans. We&apos;re not affiliated with the official Grow a Garden
                development team, but we&apos;re passionate about helping the community succeed. Our information is
                carefully researched and regularly updated to ensure accuracy.
              </p>
              <p className="section-text">
                If you find any errors or have suggestions for improvements, we welcome your feedback. Together, 
                we can maintain the most comprehensive Grow a Garden recipes resource available.
              </p>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
