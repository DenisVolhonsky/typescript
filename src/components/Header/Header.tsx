import React from 'react'
import './Header.scss'
import { isAuthenticated } from '../../Redux/Auth/selectors'
import AuthNav from '../AuthNav/AuthNav'

interface Props {
  data: string;
}

const Header = (props: Props) => {
    return (
        <header className="Header">
            <div>
                {!isAuthenticated && <AuthNav />}
            </div>
        </header>
    )
}

export default Header;
