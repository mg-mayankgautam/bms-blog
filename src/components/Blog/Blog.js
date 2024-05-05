import React,{useEffect, useState} from 'react'
import './Blog.css'
import axios from 'axios'; 
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Blog = () => {


  const { id } = useParams();
  const [blogtitle , setblogtitle] =useState('')
  const [blogauthor , setblogauthor] =useState('')
  const [blogdate , setblogdate] =useState('')
  const [blogtext , setblogtext] =useState('')
  const [blogimg , setblogimg] =useState('')
  const [featuredblogs, setfeaturedblogs] = useState([])

  useEffect(() => {
    const getblogdata = async () => {
        try {
               const URL =  `http://localhost:4700/blog?id=${id}`;
               //console.log('url',URL);
               const response = await axios.get(URL);

                console.log(response);
                // console.log(response.data); 
                setblogtitle(response.data[0].title);
                setblogauthor(response.data[0].name);
                setblogdate(response.data[0].datestring);
                setblogtext(response.data[0].text);
                setblogimg(response.data[0].url);

          
        } catch (err) {
                if (err.response) {
                  // Not in the 200 response range 
                  console.log(err.response.data);
                  console.log(err.response.status);
                  console.log(err.response.headers);
                } else {
                  console.log(`Error: ${err.message}`);
                }
        }
      }
  
   
   


   const getapproveblogOnload = async() =>{


    try{ 
      const aprovedblogdata = await axios.get('http://localhost:4700/getapprovedblogs')
      setfeaturedblogs(()=>aprovedblogdata.data);
     // console.log(aprovedblogdata.data)
    
  
  }
    catch(e){console.log(e)}

  }

  getblogdata();
  getapproveblogOnload();
 
},[])


  return (
    <div className='Blog'>
      <nav className='nav'></nav>
      <div className='blog_main'>
        <div className='blog_Title'>
          {blogtitle}
        </div>

        <div className='main_section'>
              {/* <div className='blogTitle'>
                {blogtitle}
              </div> */}

              {/* <div className='blogAuthor'>
                {blogauthor}
              </div> */}

              
              <div blog_content>

                <div className='blog_img_div'>
                    <img className='blog_img' src={blogimg}></img> 
                    {/* {blogimg} */}
                </div>
                <div className='blog_text'>
                    {blogtext}
                </div>

              </div>

              <div className='featured'>
                featured blogs
                {featuredblogs&&featuredblogs.map(blog=>(
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
                  <Link to={`/blog/${blog._id}`}>
                    See More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
                {/* {blogtext} */}
              </div>
        </div>
      </div>
    </div>
  )
}

export default Blog