import React from 'react'
import'./Header.css'
import {FaBars,FaBell,FaDiscourse,FaJenkins,FaAngleDown} from 'react-icons/fa'
import * as RxIcons from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import Layout from '../Layout/Layout';

const Header = (x) => {

  return (
    <div className='col-12 createhead d-flex'>
      <form action="/Error">
        <input className="input-design text-muted form-control" type="text" placeholder="Search here" />
      </form>
      <div ><span className='ghostit'><FaBell className='toggler text-muted'style={{marginLeft:'54rem'}} /></span></div>
      <div><span><FaDiscourse className='toggler text-muted' style={{marginLeft:'1rem'}}/></span></div>
  <div className='position-relative mt-1 overflow-hidden'>
      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" style={{width:'180px',height:'44px', marginTop:'2px', float:'right'}}>
        <div className='d-flex justify-content-center align-items-center' >
        <span><FaJenkins className='toggler text-muted' style={{height:'30px ', width:'30px'}}/></span>
       <span className='ps-4'><h4>Admin</h4></span> 
        </div>
        
      </button>

   <ul class="dropdown-menu overflow-hidden" role="menu" style={{width:'180px', position:'absolute', float:'right',WebkitAppearance:'none'}}>
            <li><NavLink to='/' className="text-muted" style={{textDecoration: 'none'}}>Logout</NavLink></li>
            <li><NavLink to='/Settings' className="text-muted" style={{textDecoration: 'none'}}>Settings</NavLink></li>
         </ul>
  </div>
    </div>
  )
}
export default Header
