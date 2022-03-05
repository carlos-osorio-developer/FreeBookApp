import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';

export default function Header() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: 'categories',
      text: 'Categories',
    },
  ];

  return (
    <div>
      <header className="container">
        <nav className="header-nav">
          <h1>
            <Link to="/" className="brand">
              Book Tracker
            </Link>
          </h1>
          <ul className="header-nav-list">
            {links.map((link) => (
              <li key={link.id} className="header-nav-item">
                <NavLink
                  to={link.path}
                  className="header-nav-link"
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
