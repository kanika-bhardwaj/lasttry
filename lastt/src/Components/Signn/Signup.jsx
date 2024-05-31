import React from 'react'
import { useNavigate } from 'react-router-dom';
import './signup.css'
const Signup = () => {
    const navigate = useNavigate();
  return (
    <div className='card jayabhardwaj justify-content-center d-flex flex-wrap  '>
  <img src="signup-background2-1024x576.jpg" className='card-img'alt="" style={{height:'100vh'}}/>
    <div className='card-img-overlay justify-content-center d-flex'>
      <form action="">
        <input type="email" placeholder='Enter Email' className='input3 mb-5 py-7'style={{marginTop:'13rem',color:'beige'}}/>
        <input type="password" placeholder='Choose your password'pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className='input3 mb-5 py-7' style={{marginTop:'1rem'}}/>
        <input type="password" placeholder='Confirm your chosen password'pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className='input3 mb-5 py-7' style={{marginTop:'1rem'}}/>
        <button type='submit' className='button1 mb-5 py-7' style={{marginTop:'1rem'}} onClick={()=>{navigate('/SignIn')}}>Sign Up</button>
      </form>
    </div>
</div>
  )
}

export default Signup