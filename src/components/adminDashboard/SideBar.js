import React, {useState} from 'react'
// import BookIcon from '@mui/icons-material/Book';
import BookIcon from '@mui/icons-material/BookOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const SideBar = () => {

    const [sidebarCollapse, setSidebarCollapse] = useState(false)

  return (
    <div className='SideBarContainer'>
        <div className={sidebarCollapse?'SideBar collapse':'SideBar'}>
        
            <div className='sidebarBtn' onClick={()=>setSidebarCollapse(()=>!sidebarCollapse)} >
                <MenuIcon/>
            </div>

            <div className='sidebarItem'>
                <BookIcon/>
                {sidebarCollapse?<></>:<p className='sidebarText'>All Blogs</p>}
            </div>
            <div className='sidebarItem'>
            <BookIcon/>
            {sidebarCollapse?<></>:<p className='sidebarText'>Approved Blogs</p>}
            </div>
            {/* <div className='sidebarItem'>
                
            </div> */}
        </div>
    </div>
  )
}

export default SideBar