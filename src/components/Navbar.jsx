import "../styles/Navbar_style.css";

export default function Navbar({ search, onSearch }) {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        Swad<span>Nepal</span>
      </div>

      {/* Nav links */}
      <ul className="navbar__links">
        <li><a href="#recipes">Recipes</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#tips">Tips</a></li>
      </ul>

      {/* Search box */}
      <div className="navbar__search">
        <svg width="14" height="14" fill="none" stroke="#8C7B6B" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Search recipes…"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </nav>
  );
}
