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

  const approveblog = async(e) =>{

    //  console.log(e.target.parentNode.parentNode.getAttribute('data-id'))
    const id= e.target.parentNode.parentNode.getAttribute('data-id')
    try{ const data = await axios.post('http://localhost:4700/approveblog',{id})
      setapprovedBlogs(()=>data.data);
      
    
    }
      catch(e){console.log(e)}
  }

  const approveBlogButton = (params) => {
    return (   
      <button onClick={(e)=>approveblog(e)}className='approveBtn'>approve</button>
    )
  }

  const archiveblog = async(e) =>{

     console.log(e.target.parentNode.parentNode.getAttribute('data-id'))
      //   const id= e.target.parentNode.parentNode.getAttribute('data-id')
      //   try{ const data = await axios.post('http://localhost:4700/approveblog',{id})
      //     setapprovedBlogs(()=>data.data);
          
        
      //   }
      //     catch(e){console.log(e)}
  }

  const archiveBlogButton = (params) => {
    return (   
      <button onClick={(e)=>archiveblog(e)}className='archiveBtn'>archive</button>
    )
  }
  
  
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
      field: 'text',
      headerName: 'Blog Entry',
      type: 'text',
      // width: 100,
      renderCell: approveBlogButton,
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
      field: 'text',
      headerName: 'Blog Entry',
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

  

  useEffect(() => {
   
    const getblogs = async() =>{


      try{ const allblogsdata = await axios.get('http://localhost:4700/getblogs')
      // console.log(allblogsdata)
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
      
      
    
    }
      catch(e){console.log(e)}

    }

    getapproveblogOnload();

  }, [])

  const rows = 
    allblogs&&allblogs.map(blog=>({id:blog._id,name:blog.name, title: blog.title, datestring: new Date(Number(blog.publishtime))}
  ))

  const rows2 = 
    approvedBlogs&&approvedBlogs.map(blog=>({id:blog._id,name:blog.name, title: blog.title, datestring: new Date(Number(blog.publishtime))}
  ))
  

  return (
    <div className='AdminDashboard'>
      <Nav/>
      
      <SideBar/>

      <div className='dashboard'>

        <Charts/>

        <div className='blogsTableContainer dashboardCard'>
        <h3>Unapproved blogs</h3>

          {/* {allblogs.map(item=>(<div id={item._id}>{item.name}<button id={item._id} onClick={(e)=>approveblog(e)}>approve</button></div>))} */}

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
      </div>
    </div>
  )
}

export default AdminDashboard
