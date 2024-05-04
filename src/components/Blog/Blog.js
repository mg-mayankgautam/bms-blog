import React,{useEffect, useState} from 'react'
import './Blog.css'
import axios from 'axios'; 
import { useParams } from 'react-router-dom';


const Blog = () => {


  const { id } = useParams();
  const [blogtitle , setblogtitle] =useState('')
  const [blogauthor , setblogauthor] =useState('')
  const [blogdate , setblogdate] =useState('')
  const [blogtext , setblogtext] =useState('')
  const [blogimg , setblogimg] =useState('')


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
  
   
   getblogdata();
 
},[])


  return (
    <div className='Blog'>
      <div className='blogTitle'>
        {blogtitle}
      </div>
      <div className='blogAuthor'>
        {blogauthor}
      </div>
      <div className='blogText'>
        {blogtext}
      </div>
    </div>
  )
}

export default Blog