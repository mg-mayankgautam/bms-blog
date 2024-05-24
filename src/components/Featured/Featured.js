import React, { useEffect, useState } from 'react'
import './Featured.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Featured = () => {

    const [featuredblogs, setfeaturedblogs] = useState([])

    useEffect(()=>{
        const getapproveblogOnload = async() =>{


            try{ 
              const aprovedblogdata = await axios.get('http://localhost:4700/getapprovedblogs')
              setfeaturedblogs(()=>aprovedblogdata.data);
             // console.log(aprovedblogdata.data)
            
          
          }
            catch(e){console.log(e)}
        
          }
        
          getapproveblogOnload();
    }, [])


  return (
    <div className='Featured'>
        <div className='featured_container1'>
          <div className='featuredHead'>
            <div className='subHomeHead'>
              Featured Articles
            </div>
            <div>See all Posts →</div>
          </div>

            {/* {featuredblogs&&featuredblogs.map(blog=>(
              <Link to={`/blog/${blog._id}`}>
                <div id={blog._id} className='f_blog_div'>
                  <div className='f_blogImgDiv'>
                    <img src={blog.url} className='f_blogImg'/>
                  </div>
                  <div className='f_blogBody'>
                    <div className='f_blogHead'>
                      <div className='f_blogAuthor'>{blog.name} - {blog.datestring}</div>
                      <div className='f_blogTitle'>{blog.title}</div> 
                    </div>
                    
                    <div className='f_OpenBlogBtn'>
                      See More
                    </div>
                  </div>
                </div>
              </Link>
            ))} */}

          {featuredblogs[0]&& 
              <Link to={`/blog/${featuredblogs[0]._id}`}>
                <div id={featuredblogs[0]._id} className='f_blog_div'>
                  <div className='f_blogImgDiv'>
                    <img src={featuredblogs[0].url} className='f_blogImg'/>
                  </div>
                  <div className='f_blogBody'>
                    <div className='f_blogHead'>
                      <div className='f_blogAuthor'>{featuredblogs[0].name} - {featuredblogs[0].datestring}</div>
                      <div className='f_blogTitle'>{featuredblogs[0].title}</div> 
                    </div>
                    
                    <div className='f_OpenBlogBtn'>
                      See More
                    </div>
                  </div>
                </div>
              </Link>
            } 
        </div>
                
        <div className='featured_container2'>
          
          {featuredblogs[1]&& 
              <Link to={`/blog/${featuredblogs[1]._id}`}>
                <div id={featuredblogs[1]._id} className='f_blog_div'>
                  <div className='f_blogImgDiv'>
                    <img src={featuredblogs[1].url} className='f_blogImg'/>
                  </div>
                  <div className='f_blogBody'>
                    <div className='f_blogHead'>
                      <div className='f_blogAuthor'>{featuredblogs[1].name} - {featuredblogs[1].datestring}</div>
                      <div className='f_blogTitle'>{featuredblogs[1].title}</div> 
                    </div>
                    
                    <div className='f_OpenBlogBtn'>
                      See More
                    </div>
                  </div>
                </div>
              </Link>
              }
        </div>
    </div>
  )
}

export default Featured