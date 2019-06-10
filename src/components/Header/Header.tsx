import React from 'react'
import { connect } from 'react-redux'
import AuthNav from '../AuthNav/AuthNav'
import './Header.scss'

import { isAuthenticated } from '../../Redux/Auth/selectors'
import * as operations from '../../Redux/Auth/operations'

const Header:React.FC = (props:any) => {
  return (
      <header className="Header">
          <div>     
            <AuthNav />
          </div>
      </header>
  )
}
const mstp = (state: any) => ({
  isAuthenticated: isAuthenticated(state)
})

const mdtp = {
  onSignOut: operations.signOut
};

export default connect(mstp, mdtp)(Header);