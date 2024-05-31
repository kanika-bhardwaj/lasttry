import React from 'react'
import {useNavigate} from 'react-router-dom'
import './/signin.css'
const SignIn = () => {
  const navigate = useNavigate();
  return (
//     <div className='justify-content-center d-flex 'style={{margin:'250px'}}>
//     <div class="card mb-3 mt-8" style={{width:'600px',height:'300px',maxwidth: "540px"}}>
//   <div class="row no-gutters">
//     <div class="col-md-4">
//       <img src="chichi.jpg" class="card-img" alt="..." style={{height:'280px',padding:'8px',marginBottom:'7px',marginTop:'7.2px'}}/>
//     </div>
//     <div class="col-md-8">
//       <div class="card-body">
        
//       </div>
//     </div>
//   </div>
// </div>
// </div>
<>
<div className='card jayabhardwaj justify-content-center d-flex flex-wrap  '>
  <img src="signup-background2-1024x576.jpg" className='card-img'alt="" style={{height:'100vh'}}/>
    <div className='card-img-overlay justify-content-center d-flex'>
      <form action="">
        <input type="email" placeholder='Enter registered Email' required className='input3 mb-5 py-7'style={{marginTop:'13rem',color:'black !important'}}/>
        <input type="password" placeholder='Enter your password'required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className='input3 mb-5 py-7' style={{marginTop:'1rem'}}/>
        <div className='justify-content-center d-flex'>
        <button type='submit' className='button1 mb-5 py-7' style={{ marginLeft:'-80px',marginTop:'1rem',width:'100px'}} onClick={()=>{navigate('/content')}}>Sign In</button>
        {/* <h4 className='justify-content-center d-flex fw-bold'>Don't Have an Account?</h4> */}
        <button type='submit' className='button1 mb-5 py-7' style={{marginLeft:'30px',marginTop:'1rem', width:'100px'}} onClick={()=>{navigate('/SignUp')}}>Sign Up</button>
        </div>      
      </form>
    </div>
</div>
</>
  )
}

export default SignIn