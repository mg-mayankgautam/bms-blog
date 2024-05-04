import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';

const Nav = () => {
  return (
    <div className='adminNav'>
        <div className='navItems'>
            <div className='logo'>BMS Dashboard</div>
            <div className='signout'><LogoutIcon/> Sign Out</div>
        </div>
    </div>
  )
}

export default Nav