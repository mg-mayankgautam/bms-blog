import React from 'react'
import { useState, useEffect } from 'react';
import './home.css';
import blue from './blue.png';
import axios from 'axios';


const Home = () => {

  const [file, setFile] = useState()
  const [name, setname] = useState("");
  const [text, settext] = useState("");
  const [title, settitle] = useState("");
  const [approvedBlogs, setapprovedBlogs]= useState([]);
  const [anonymous, setAnonymous]=useState(false)
  

    const [modal, setmodal] = useState(false);
   
    const submitBlog = async()=>{
      console.log('create_username,create_password');

     // axios.post('/',{create_username,create_password});
      try{
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let newDate = new Date()
        let date = newDate.getDate();
        let month = monthNames[newDate.getMonth() + 1];
        let year = newDate.getFullYear();
        const datestring = `${month} ${date}, ${year}`
        const publishtime = newDate.getTime();
        console.log(datestring, publishtime)

  
      const formData = new FormData();
        formData.append("image", file);
        formData.append("name", name);
        formData.append('text',text);
        formData.append('title',title);
        formData.append('datestring',datestring);
        formData.append('publishtime',publishtime);

        // if(anonymous){
        //   // setname('anonymous');
        // }

        if(file && name && text && title){ await axios.post("http://localhost:4700/blogdata", formData, { headers: {'Content-Type': 'multipart/form-data'}})}

        else{console.log('fill all fields')}
        
      }
      catch(e){console.log(e)}

  }

  useEffect(() => {
   
    const getapproveblogOnload = async() =>{


      try{ 
        const aprovedblogdata = await axios.get('http://localhost:4700/getapprovedblogs')
        setapprovedBlogs(()=>aprovedblogdata.data);
        console.log(aprovedblogdata.data)
      
    
    }
      catch(e){console.log(e)}

    }
    getapproveblogOnload();

  }, [])

  // useEffect(()=>{

  //   const toggle = document.querySelector('.toggle');
  //   console.log(toggle)

    
  // },[])

  // const anonymousBlog =()=>{
  //   console.log('hereee')
  // }

  return (
    <div className="home">
      <div className='header'>
        
        <h3>BMS BLOGS</h3>

        <button onClick={()=>setmodal(!modal)} className='submitBlogbtn'> submit a blog</button>

      </div>

      <div className='blog_body'>

            {approvedBlogs&&approvedBlogs.map(blog=>(
              <div id={blog._id} className='blog_div'>
                <div>
                  <img src={blog.url}/>
                </div>
                <div className='blogHead'>
                  <h3>{blog.title}</h3> 
                  <div>by {blog.name}</div>
                </div>
                <div>
                  {blog.text}
                </div>
              </div>
            ))}
            
      </div>


    { modal? <div className='modal_container'>

          <div className='modal'>

            
            <div className='closeModalDiv'>
              <button 
              onClick={()=>setmodal(!modal)} className='closeModalbtn'>X
              </button>
            </div>

            <div>
              <h3>Submit your entry</h3>
            </div>

            <div>
              < div> keep it anonymous? </div>
            
              <div>
                <label className="switch">
                    <input type="checkbox"  className='toggle'  onChange={()=> {setAnonymous(!anonymous); setname('anonymous')}}/>
                      <span className="slider round"></span>
                </label>
              </div>   
            </div>

            
            <div> 
            {anonymous?<></>:
            <input 
              type='text' 
              placeholder='name'
              onChange={e=>setname(e.target.value)}
              value={name}
              required={true}
              />
            }
          </div>
          
          <div>
              <input type='text' 
              placeholder='Title'
              onChange={e=>settitle(e.target.value)}
              value={title}
              >
              </input>
            </div>
            

            <div>
              <textarea type='text' 
              placeholder='your entry'
              onChange={e=>settext(e.target.value)}
              value={text}
              // rows='8'
              >
              </textarea>
            </div>

            
            <div className='fileInputDiv'> 
              
              <label for='inputFile' className='inputFileLabel'>
              Choose a file
              </label>
              <input onChange={e => setFile(e.target.files[0])} 
              type="file" 
              accept="image/*"
              className='inputFile'/>
            </div>

            <div>
              <button onClick={()=>submitBlog()} className='submitBlogbtn'>submit</button>
            </div>

        </div>
      </div> :<></>}

  </div>
  )
}

export default Home
