import React, { useEffect,useState } from 'react'
import axios from 'axios'
import './AdminDashboard.css';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { v4 as uuidv4 } from 'uuid';
import Nav from './Nav';
import SideBar from './SideBar';
import Charts from './Charts';

const AdminDashboard = () => {  

  const [allblogs, setallblogs] = useState([]);
  const [approvedBlogs,setapprovedBlogs] = useState([]);
  const [archivedBlogs,setarchivedBlogs] = useState([]);

  const approveblog = async(e) =>{

    //  console.log(e.target.parentNode.parentNode.getAttribute('data-id'))
    const id= e.target.parentNode.parentNode.getAttribute('data-id')
    try{ const data = await axios.post('http://localhost:4700/approveblog',{id})
      setapprovedBlogs(()=>data.data);
     console.log(data.data)
    
    }
      catch(e){console.log(e)}
  }

  const previewblog = async(e) =>{

      console.log(e.target.parentNode.parentNode.getAttribute('data-id'))
    const id= e.target.parentNode.parentNode.getAttribute('data-id')
    // try{ const data = await axios.post('http://localhost:4700/approveblog',{id})
    //   setapprovedBlogs(()=>data.data);
     
    
    // }
    //   catch(e){console.log(e)}
  }

  const approveBlogButton = (params) => {
    return (   
      <button onClick={(e)=>approveblog(e)}className='approveBtn'>approve</button>
    )
  }



  
  

 const archiveBlogButton = (params) => {
  return (   
    <button onClick={(e)=>archiveblog(e)}className='archiveBtn'>archive</button>
  )
}

  const archiveblog = async(e) =>{

     console.log(e.target.parentNode.parentNode.getAttribute('data-id'))
        const id= e.target.parentNode.parentNode.getAttribute('data-id')
        try{ const data = await axios.post('http://localhost:4700/archiveblog',{id})
          setarchivedBlogs(()=>data.data);
          //console.log(data.data)
        
        }
          catch(e){console.log(e)}
  }

  const deleteBlogButton = (params) => {
    return (   
      <button onClick={(e)=>deleteUnapprovedBlog(e)}className='deleteBtn'>delete</button>
    )
  }

  const deleteArchiveButton = (params) => {
    return (   
      <button onClick={(e)=>deletearchive(e)}className='deleteBtn'>delee</button>
    )
  }

  const previewBlogButton = (params) => {
    return (   
      <button 
      onClick={(e)=>previewblog(e)}
      className='previewBtn'
      >
        preview
      </button>
    )
  }

  const deletearchive = async(e) =>{

    
       const id= e.target.parentNode.parentNode.getAttribute('data-id')
       try{ const data = await axios.post('http://localhost:4700/deletearchive',{id})
       setarchivedBlogs(()=>data.data);
       console.log(data.data)
       
       }
         catch(e){console.log(e)}
 }

//  const unarchiveblog = async(e) =>{

    
//   const id= e.target.parentNode.parentNode.getAttribute('data-id')
//   try{ const data = await axios.post('http://localhost:4700/deletearchive',{id})
//   setarchivedBlogs(()=>data.data);
//   console.log(data.data)
  
//   }
//     catch(e){console.log(e)}
// }
 


 const deleteUnapprovedBlog = async(e) =>{

    
  const id= e.target.parentNode.parentNode.getAttribute('data-id')
  try{ const data = await axios.post('http://localhost:4700/deleteunapprovedblog',{id})
  setallblogs(()=>data.data);
 // console.log(data.data)
  
  }
    catch(e){console.log(e)}
}



 const unarchiveBlogButton = (params) => {
  return (   
    <button 
    onClick={(e)=>unarchiveblog(e)

    }>unarchive</button>
  )
}

const unarchiveblog = async(e) =>{

  console.log(e.target.parentNode.parentNode.getAttribute('data-id'))
     const id= e.target.parentNode.parentNode.getAttribute('data-id')
     try{ const data = await axios.post('http://localhost:4700/unarchiveblog',{id})
     setarchivedBlogs(()=>data.data);
       
     
     }
       catch(e){console.log(e)}
}
  
  
 

  

  useEffect(() => {
   
    const getblogs = async() =>{


      try{ const allblogsdata = await axios.get('http://localhost:4700/getblogs')
      console.log(allblogsdata)
      setallblogs(()=>allblogsdata.data);
      
    
    }
      catch(e){console.log(e)}

    }
    getblogs();

  }, [approvedBlogs])

  useEffect(() => {
   
    const getapproveblogOnload = async() =>{


      try{ const aprovedblogdata = await axios.get('http://localhost:4700/getapprovedblogs')
      setapprovedBlogs(()=>aprovedblogdata.data);
      console.log(aprovedblogdata.data)
      
    
    }
      catch(e){console.log(e)}

    }
    getapproveblogOnload();

  }, [archivedBlogs])

  useEffect(() => {
   
    const getarchivedblogsOnload = async() =>{


      try{ const archivedblogdata = await axios.get('http://localhost:4700/getarchiveblog')
      setarchivedBlogs(()=>archivedblogdata.data);
      //console.log(archivedBlogs)
      
    
    }
      catch(e){console.log(e)}

    }
    getarchivedblogsOnload();

  }, [])

  



  console.log(archivedBlogs)

  const columns1 = [
    { field: 'id', headerName: 'ID', width: 10 },
    {
      field: 'name',
      headerName: 'Name',
      // width: 110
    },
    {
      field: 'title',
      headerName: 'Title',
      // width: 110
    },
    {
      field: 'approve',
      headerName: 'Approve',
      type: 'text',
      // width: 100,
      renderCell: approveBlogButton,
    },
    {
      field: 'delete',
      headerName: 'Delete',
      type: 'text',
      // width: 100,
      renderCell: deleteBlogButton,
    },
    {
      field: 'Preview',
      headerName: 'Preview',
      type: 'date',
      renderCell: previewBlogButton,
      // width: 80,
    },
    {
      field: 'datestring',
      headerName: 'Date',
      type: 'date',
      // width: 80,
    },
  ];
  
  const columns2 = [
    { field: 'id', headerName: 'ID', width: 10 },
    {
      field: 'name',
      headerName: 'Name',
      // width: 110,
    },
    {
      field: 'title',
      headerName: 'Title',
      // width: 110,
    },
    {
      field: 'archive',
      headerName: 'Archive',
      type: 'text',
      // width: 100,
      renderCell: archiveBlogButton,
    },
      {
        field: 'datestring',
        headerName: 'Date',
        type: 'date',
        // width: 80,
        // valueGetter: (value, row) => value && value==new Date(row.datestring),
      },
  ];

  const columns3 = [
    { field: 'id', headerName: 'ID', width: 10 },
    {
      field: 'name',
      headerName: 'Name',
      // width: 110,
    },
    {
      field: 'title',
      headerName: 'Title',
      // width: 110,
    },
    {
      field: 'archive',
      headerName: 'unarchive',
      type: 'text',
      // width: 100,
      renderCell: unarchiveBlogButton,
    },
    {
      field: 'delete',
      headerName: 'Delete',
      type: 'text',
      // width: 100,
      renderCell: deleteArchiveButton,
    },
      {
        field: 'datestring',
        headerName: 'Date',
        type: 'date',
        // width: 80,
        // valueGetter: (value, row) => value && value==new Date(row.datestring),
      },
  ];

  const rows = 
    allblogs&&allblogs.map(blog=>({id:blog._id,name:blog.name, title: blog.title, datestring: new Date(Number(blog.publishtime))}
  ))
  console.log(allblogs)

  const rows2 = 
    approvedBlogs&&approvedBlogs.map(blog=>({id:blog._id,name:blog.name, title: blog.title, datestring: new Date(Number(blog.publishtime))}
  ))

  const rows3 = 
  archivedBlogs&&archivedBlogs.map(blog=>({id:blog._id,name:blog.name, title: blog.title, datestring: new Date(Number(blog.publishtime))}
  ))
  

  return (
    <div className='AdminDashboard'>
      <Nav/>
      
      <SideBar/>

      <div className='dashboard'>

        <div>

            <div className='blogsTableContainer dashboardCard'>
              <h3>Unapproved blogs</h3>

              {/* {archivedBlogs.map(item=>(<div id={item._id}>{item.name}<button id={item._id} onClick={(e)=>approveblog(e)}>approve</button></div>))} */}

              <Box sx={{ height: 300, width: '100%' }}>
                <DataGrid 
                rows={rows}
                columns={columns1}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 3,
                    },
                  },
                }}
                // getRowId={(row) =>  uuidv4()}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
              />
              </Box>

            </div>

            <div className='blogsTableContainer dashboardCard'>
              <h3>Approved blogs</h3>

              {/* {approvedBlogs.map(item=>(<div id={item._id}>{item.name}<button>Archive</button>  </div>))} */}

              <Box sx={{ height: 300, width: '100%' }}>
                <DataGrid 
                  rows={rows2}
                  columns={columns2}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 3,
                      },
                    },
                  }}
                  // getRowId={(row) =>  uuidv4()}
                  pageSizeOptions={[5]}
                  checkboxSelection
                  disableRowSelectionOnClick
                />
              </Box>
            </div>

            <div className='blogsTableContainer dashboardCard'>
              <h3>Archived Blogs</h3>
              
              {/* {archivedBlogs.map(item=>(<div id={item._id}>{item.name}<button id={item._id} onClick={(e)=>approveblog(e)}>approve</button></div>))} */}
              <Box sx={{ height: 300, width: '100%' }}>
                <DataGrid 
                  rows={rows3}
                  columns={columns3}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 3,
                      },
                    },
                  }}
                  // getRowId={(row) =>  uuidv4()}
                  pageSizeOptions={[5]}
                  checkboxSelection
                  disableRowSelectionOnClick
                />
              </Box>
            </div>

        </div>

        
        <Charts/>
        
      </div>

    </div>
  )
}

export default AdminDashboard
