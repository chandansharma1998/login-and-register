import React,{useState} from 'react'
import axios from 'axios'
import './register.css'
import {useHistory} from 'react-router-dom'

const Register = () => {

  const history = useHistory();

  const [user,setUser] = useState({
    name:'',
    email:'',
    password:'',
    reEnterPassword:''
  })

  const handleChange = e =>{
    const {name, value} = e.target;
    setUser({
      ...user,
      [name]:value
    })
  }

  const register = ()=>{
    const {name,email,password,reEnterPassword} = user;
    if(name && email && password && password === reEnterPassword){
      axios.post('http://localhost:5000/register',user)
        .then(res=>{
          alert(res.data.message)
          history.push('/login')
        })
    }
    else{
      alert('Enter correct details')
    }

  }

  return (
    <div className='register'>
      <h1>Register</h1>
      <input name='name' value={user.name} type='text' placeholder='Enter your name' onChange = {handleChange}></input>
      <input name='email' value={user.email} type='text' placeholder='Enter your email' onChange = {handleChange}></input>
      <input name='password' value={user.password} type='password' placeholder='Enter password' onChange = {handleChange}></input>
      <input name='reEnterPassword' value={user.reEnterPassword} type='password' placeholder='Re-Enter password' onChange = {handleChange}></input>
      <div className='button' onClick={register}>Register</div>
      <div>or</div>
      <div className='button' onClick={()=>history.push('/login')}>Login</div>
    </div>
  )
}

export default Register
