const React = require('react');

module.exports = function Navbar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">CookBook</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
              </a>
              {!user ? (
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li><a className="dropdown-item" href="/reg">Register</a></li>
                  <li><a className="dropdown-item" href="/login">Login</a></li>
                </ul>
              )
                : (
                  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li><a className="dropdown-item" href={`/favorite/${user.id}`}>Favorites</a></li>
                    <li><a className="dropdown-item" href="/logout">Logout</a></li>
                  </ul>
                )}
            </li>
          </ul>
        </div>
        {user && (<div className="navbar-brand">{user.login}</div>)}
      </div>
    </nav>
  );
};
