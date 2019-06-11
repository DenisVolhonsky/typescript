import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './AuthNav.scss'

const AuthNav:FC = () => (
  <ul className="AuthNav_nav">
    <li>
      <NavLink
        to="/auth/signup"
        className="AuthNav_link"
        activeClassName="AuthNav_activeLink"
      >
        Sign up
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/auth/signin"
        className="AuthNav_link"
        activeClassName="AuthNav_activeLink"
      >
        Sign in
      </NavLink>
    </li>
  </ul>
);

export default AuthNav;