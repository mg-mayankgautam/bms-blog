import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/home/Home';
import Layout from './Layout';
import AdminPage from './components/admin/AdminPage';
import RequireloginAuth from "./RequireloginAuth";
import AdminDashboard from './components/adminDashboard/AdminDashboard';
import Blog from './components/Blog/Blog';


function App() {




  return (
    

        <Routes >
        
          <Route  path="/" element={<Layout />}>
                
                <Route index element={<Home />} /> 
      
                <Route path="/blog/:id" element={<Blog/>}/>

                <Route path="admin" element={<AdminPage />}/>   
                      
          </Route>

          <Route element={<RequireloginAuth />}>
                   
                  {/* <Route index element={<AdminDashboard />} />  */}
                  <Route path='dashboard' element={<AdminDashboard/>}/>
          </Route>

                    

         
                   
         
          
        </Routes> 


        
    
  );
}

export default App;
