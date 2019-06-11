import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './AuthNav.scss'

const AuthOut:FC = () => (
  <div className="AuthNav_nav">
      <NavLink
        to="/auth/signin"
        className="AuthNav_link"
        activeClassName="AuthNav_activeLink"
      >
        Sign out
      </NavLink>
   </div> 
);

export default AuthOut;