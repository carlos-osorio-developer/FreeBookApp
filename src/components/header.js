import React from 'react';
import { Outlet } from 'react-router-dom';

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
      <header className="header">
        <h1 className="header-title">
          <a href="/">
            <span className="header-title-text">
              Book Tracker
            </span>
          </a>
        </h1>
        <nav className="header-nav">
          <ul className="header-nav-list">
            {links.map((link) => (
              <li key={link.id} className="header-nav-item">
                <a href={link.path} className="header-nav-link">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
