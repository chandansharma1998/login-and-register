import React,{useState} from 'react'
import axios from 'axios'
import './login.css'
import {useHistory} from 'react-router-dom'

const Login = ({setLoginUser}) => {

  const history = useHistory();

  const [user,setUser] = useState({
    
    email:'',
    password:'',
   
  })

  const handleChange = e =>{
    const {name, value} = e.target;
    setUser({
      ...user,
      [name]:value
    })
  }

  const login = () => {
    const {email,password} = user;
    if(email && password){
      axios.post('https://login-and-register-app.herokuapp.com/login',user)
      .then((res) => {
        alert(res.data.message)
        setLoginUser(res.data.user)
        history.push('/')
      })
    }
    else{
      alert('Enter valid details')
    }
    
  }

  return (
    
    <div className='login'>
      
      <h1>Login</h1>
      <input name='email' value={user.email} type='text' placeholder='Enter your email' onChange={handleChange}></input>
      <input name='password' value={user.password}type='password' placeholder='Enter password' onChange={handleChange}></input>
      <div className='button' onClick={login}>Login</div>
      <div>or</div>
      <div className='button' onClick={()=>history.push('/register')}>Register</div>
    </div>
  )
}

export default Login
