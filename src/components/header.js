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
        <h1 className="header-title">
          <Link to="/">
            <span className="header-title-text">
              Book Tracker
            </span>
          </Link>
        </h1>
        <nav className="header-nav">
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
