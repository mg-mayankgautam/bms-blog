import React, { useEffect,useState } from 'react'
import axios from 'axios'

const AdminDashboard = () => {


  const [allblogs, setallblogs] = useState([]);
  const [approvedBlogs,setapprovedBlogs] = useState([]);


  const approveblog = async(e) =>{

    console.log(e.target.id)
    const id=e.target.id
    try{ const data = await axios.post('http://localhost:4700/approveblog',{id})
      setapprovedBlogs(()=>data.data);
      
    
    }
      catch(e){console.log(e)}
  }

  console.log('approvedBlogs',approvedBlogs);

  useEffect(() => {
   
    const getblogs = async() =>{


      try{ const allblogsdata = await axios.get('http://localhost:4700/getblogs')
      setallblogs(()=>allblogsdata.data);
      
    
    }
      catch(e){console.log(e)}

    }

    getblogs();

  }, [approvedBlogs])
  
  console.log(allblogs)

  useEffect(() => {
   
    const getapproveblogOnload = async() =>{


      try{ const aprovedblogdata = await axios.get('http://localhost:4700/getapprovedblogs')
      setapprovedBlogs(()=>aprovedblogdata.data);
      
      
    
    }
      catch(e){console.log(e)}

    }

    getapproveblogOnload();

  }, [])


  return (
    <div>
      this is dashboard
      <div>
      annaproved blogs

        {allblogs.map(item=>(<div id={item._id}>{item.name}<button id={item._id} onClick={(e)=>approveblog(e)}>approve</button></div>))}

      </div>

      <div>
      aproved blogs

        {approvedBlogs.map(item=>(<div id={item._id}>{item.name}<button>Archive</button>  </div>))}

      </div>

    </div>
  )
}

export default AdminDashboard
