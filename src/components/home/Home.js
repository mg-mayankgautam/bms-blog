import React from 'react'
import { useState } from 'react';
import './home.css';
import blue from './blue.png';
import axios from 'axios';


const Home = () => {

  const [file, setFile] = useState()
  const [name, setname] = useState("");
  const [text, settext] = useState("");
  const [title, settitle] = useState("");

  

    const [modal, setmodal] = useState(false);
   
    const submitBlog = async()=>{
      console.log('create_username,create_password');

     // axios.post('/',{create_username,create_password});
    try{
     const formData = new FormData();
      formData.append("image", file);
      formData.append("name", name);
      formData.append('text',text);
      formData.append('title',title);

      if(file && name && text && title){ await axios.post("http://localhost:4700/blogdata", formData, { headers: {'Content-Type': 'multipart/form-data'}})}
      else{console.log('fill all fields')}
      
    }
    catch(e){console.log(e)}



  }

  return (
    <div className="home">
    <div className='header'>BMS BLOGS

    <button onClick={()=>setmodal(!modal)}> submit a blog</button>
    
    

    </div>
    

    <div className='blog_body'>
          <div className='blog_div'>
              {/* <div className='blog_thumbnail'>
              </div> */}
          </div>
          <div className='blog_div'>
              {/* <div className='blog_thumbnail'>
              </div> */}

          </div>

          <div className='blog_div'>
               {/* <div className='blog_thumbnail'>
              </div> */}

          </div>

          <div className='blog_div'>
             {/* <div className='blog_thumbnail'>
              </div> */}

          </div>

          <div className='blog_div'>  
          {/* <div className='blog_thumbnail'>
              </div> */}

          </div>
          <div className='blog_div'>
             {/* <div className='blog_thumbnail'>
              </div> */}

          </div>

          <div className='blog_div'>
              {/* <div className='blog_thumbnail'>
              </div> */}
          </div>
          <div className='blog_div'>
              {/* <div className='blog_thumbnail'>
              </div> */}

          </div>

          <div className='blog_div'>
               {/* <div className='blog_thumbnail'>
              </div> */}

          </div>

          <div className='blog_div'>
             {/* <div className='blog_thumbnail'>
              </div> */}

          </div>

          <div className='blog_div'>  
          {/* <div className='blog_thumbnail'>
              </div> */}

          </div>
          <div className='blog_div'>
             

          </div>

          <div className='blog_div'>
             

          </div>

          <div className='blog_div'>
             

          </div>

          <div className='blog_div'>
             

          </div>
          
    </div>


   { modal? <div className='modal_container'>

        <div className='modal'>

          
          <div>
            <button 
            onClick={()=>setmodal(!modal)}>X
            </button>
          </div>

          <div>
            < div> keep it anonymous? </div>
           
            <div>
              <label class="switch">
                  <input type="checkbox" ></input>
                    <span class="slider round"></span>
              </label>
            </div>   
          </div>

          <div> 
            <input 
              type='text' 
              placeholder='name'
              onChange={e=>setname(e.target.value)}
              value={name}
              required={true}
              >
            </input>
          </div>

         <div> <input 
           onChange={e => setFile(e.target.files[0])} 
             type="file" 
             accept="image/*">

              </input>
          </div>

          <div>
            <input type='text' 
            placeholder='your entry'
            onChange={e=>settext(e.target.value)}
            value={text}
            >
            </input>
          </div>

          <div>
            <input type='text' 
            placeholder='Title'
            onChange={e=>settitle(e.target.value)}
            value={title}
            >
            </input>
          </div>

          <div><button onClick={()=>submitBlog()}>submit</button></div>

       </div>
    </div> :<></>}

  </div>
  )
}

export default Home
