import React, { FC } from 'react'
import AuthNav from '../AuthNav/AuthNav'
import './Header.scss'

const Header:FC = () => (
      <header className="Header">
          <div>     
            <AuthNav />
          </div>
      </header>
)

export default Header;