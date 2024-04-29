import logo from './logo.svg';
import './App.css';
import blue from './blue.png';
import { useState } from 'react';


function App() {

const [modal, setmodal] = useState(false);


  return (
    <div className="App">
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

            <div><input type='text' placeholder='name'></input></div>
            <div><input type='text' placeholder='your entry'></input></div>

            <div><button>submit</button></div>

         </div>
      </div> :<></>}

    </div>
  );
}

export default App;
