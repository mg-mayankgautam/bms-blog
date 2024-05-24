import React, { useState } from 'react'
import axios from 'axios';
import useAuth from '../../hook/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './admin.css'

const AdminPage = () => {


    axios.defaults.withCredentials = true;
    const {setAuth}=useAuth();
    const [ create_username, setCreate_username] = useState('');
    const [create_password, setCreate_password] = useState('');

    const [ Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();
    const createaccount = async()=>{
        console.log(create_username,create_password);

       // axios.post('/',{create_username,create_password});
        try{
            const data = await axios.post('http://localhost:4700/',{create_username,create_password})
        
            console.log(data.data);
           
        }
        catch(err){console.log(err);}
       



    }

    const submitcredentials = async()=>{
        console.log(Username,Password);

       // axios.post('/',{create_username,create_password});
        try{
            const data = await axios.post('http://localhost:4700/login',{Username,Password})
        
           
            const axiosdata = data.data
            console.log('/a/a/a',axiosdata);
            if(!axiosdata){console.log('nikl loveday');
          
        }
            else{    
                 const user = axiosdata.Username;
                setAuth({user});
                console.log('after login',user);
               // setUserName(user);
                navigate('/dashboard');
                
              //  navigate(`${state.prev.pathname}`)
            }
              

           
        }
        catch(err){console.log(err);}
       



    }

    


  return (
    <div className='adminLogin'>    

        <div className='loginForm'>
            <h3>LOGIN CROW</h3>

            <input 
                value={Username}
                onChange={(e)=>{setUsername(e.target.value);}}
                type='text' 
                placeholder='enter_username'
                className='loginInput'>

            </input>
            
            <input 
                value={Password}
                onChange={(e)=>{setPassword(e.target.value);}}
                type='text' 
                placeholder='enter_password' className='loginInput'></input>
            <button onClick={()=>submitcredentials()} className='submitLogin'>submit</button>
        </div>


        {/* <div class='signup_div'>
            <input 
                value={create_username}
                onChange={(e)=>{setCreate_username(e.target.value);}}
                type='text' 
                placeholder='create_username'>

            </input>
            
            <input 
                value={create_password}
                onChange={(e)=>{setCreate_password(e.target.value);}}
                type='text' 
                placeholder='create_password'></input>
            <button onClick={()=>createaccount()}>submit</button>

        </div> */}


    </div>
  )
}

export default AdminPage
