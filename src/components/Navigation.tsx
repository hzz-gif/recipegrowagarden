import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <span className="logo-icon">🌱</span>
          <span className="logo-text">Grow a Garden Recipes</span>
        </Link>

        <ul className="nav-menu">
          <li className="nav-dropdown">
            <span className="nav-link dropdown-trigger">
              Recipes <span className="dropdown-arrow">▼</span>
            </span>
            <div className="dropdown-menu">
              <Link href="/#recipes" className="dropdown-link">All Recipes</Link>
              <Link href="/prismatic-recipes" className="dropdown-link">✨ Prismatic Recipes</Link>
            </div>
          </li>
          <li><Link href="/#guide" className="nav-link">Guide</Link></li>
          <li><Link href="/#tips" className="nav-link">Tips</Link></li>
          <li><Link href="/blog" className="nav-link">Blog</Link></li>
        </ul>

        <div className="nav-actions">
          <a href="https://www.roblox.com/games/6430220996/Grow-a-Garden"
             target="_blank"
             rel="noopener noreferrer"
             className="play-button">
            🎮 Play Game
          </a>
        </div>
      </div>
    </nav>
  );
}
