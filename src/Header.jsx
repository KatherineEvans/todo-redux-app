export function Header() {
  return (
    <header className="bg-emerald-950 text-white p-4">
      <nav className="flex flex-row justify-between">
        <span>
          <a className="nav-link" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            Link
          </a>
        </span>
        <div>
          <label htmlFor="search" className="mr-3">
            Search
          </label>
          <input type="text" className="input-text-field" />
        </div>
      </nav>
    </header>
  );
}
