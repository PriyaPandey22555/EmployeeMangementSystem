import React, { useState,useContext, useEffect  } from 'react'
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
const [user, setUser] = useState(null)
const [loggedInUserData, setLoggedInUseData] = useState(null)
const [userData,setUserData] = useContext(AuthContext)


useEffect(() =>{
   const loggedInUser = localStorage.getItem('loggedInUser')
   
   if(loggedInUser){
     const userData = JSON.parse(loggedInUser)
     setUser(userData.role)
     setLoggedInUseData(userData.data)
   }

},[])


const handleLogin = (email,password) =>{
   if(email == "admin23@gmail.com" && password == "123"){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      
   }else if(userData){
      const employee = userData.find((e)=>email == e.email && e.password ==password)
      if(employee){
         setUser('employee')
         setLoggedInUseData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data: employee}))
      
      }
   }
   else{
    alert("Invaild Credentials")
   }
}

 
 
 
  
  return (
    <>
    {!user ? <Login  handleLogin={handleLogin}/>: " "}
    {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    
    

    </>
  )
}

export default App;