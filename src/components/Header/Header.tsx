import React from 'react'
import './Header.scss'

interface Props {
  data: string;
}

const Header = (props: Props) => {
    return (
        <header className="Header">
            <div>{props.data}</div>
        </header>
    )
}

export default Header;
