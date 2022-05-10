import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const getActiveLinkClassName = (isActive: boolean) => (isActive ? 'header__link header__link--active' : 'header__link');

const Header = () => (
  <div className="container">
    <header className="header">
      <div className="row">
        <div className="col-md-12">
          <div className="header__navigation">
            <nav className="header__navigation--link">
              <NavLink
                className={({ isActive }) => getActiveLinkClassName(isActive)}
                to="/"
              >
                Characters
              </NavLink>

              <NavLink
                className={({ isActive }) => getActiveLinkClassName(isActive)}
                to="/episodes"
              >
                Episodes
              </NavLink>

              <NavLink
                className={({ isActive }) => getActiveLinkClassName(isActive)}
                to="/locations"
              >
                Locations
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 center-md">
          <h1 className="header__title">The Rick and Morty Page</h1>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
