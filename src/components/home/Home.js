import React from 'react'
import { useState, useEffect } from 'react';
import './home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Featured from '../Featured/Featured';


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
      
      <Nav setmodal={setmodal} modal={modal}/>

      <Featured/>


      <div className='blogs_container_div'>
      
        <div className='subHomeHead'>Explore All Blogs!</div>

        <div className='blogs_container'>

              {approvedBlogs&&approvedBlogs.map(blog=>(
                <Link to={`/blog/${blog._id}`}>
                <div id={blog._id} className='blog_div'>
                  <div className='blogImgDiv'>
                    <img src={blog.url} className='blogImg'/>
                  </div>
                  <div className='blogBody'>
                    <div className='blogHead'>
                      <div className='blogAuthor'>{blog.name} - {blog.datestring}</div>
                      <div className='blogTitle'>{blog.title}</div> 
                    </div>
                    <div className='blogText'>
                      {blog.text}
                    </div>
                    <div className='OpenBlogBtn'>
                      See More
                    </div>
                  </div>
                </div>
                </Link>
              ))}

              <div className='blog_div'></div>
              <div className='blog_div'></div>
              <div className='blog_div'></div>
              <div className='blog_div'></div>
              <div className='blog_div'></div>
              <div className='blog_div'></div>
              
        </div>

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
              placeholder='Title(less than 50 charachters)'
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

      <Footer/>

  </div>
  )
}

export default Home
