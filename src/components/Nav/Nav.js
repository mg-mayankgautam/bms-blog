import React from 'react'
import './Nav.css'
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import logo from '../../assets/logo.png'

const Nav = ({setmodal, modal}) => {

  return (
    <div className='header'>
    
        <div className='homeNav'>
            <div className='navitem'>
                <a href="https://www.blissfulmindsbvcoe.in/" target='_blank'>↗ Home</a>
                <div>
                  Talk to us
                </div>
            </div>
            <div className='navTitle'>
              <img src={logo} className='navicon'/>
              <div className='homeHead'>BMS BLOGS</div>
            </div>
          
            <button onClick={()=>setmodal(!modal)} className='opensubmitBlogbtn navitem'>
              {/* <AutoStoriesRoundedIcon className='navicon'/> */}
            Post a blog</button>
        </div>

      </div>
  )
}

export default Nav