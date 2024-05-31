import React, { useState } from 'react'
import './Navigation.css'
import { FaBars } from 'react-icons/fa'
import {FaBook, FaCalendar, FaCheckSquare, FaCog, FaConnectdevelop, FaDatabase, FaEnvelopeOpen, FaMobile, FaProductHunt, FaStickyNote, FaTh, FaUser, FaUsers, FaWindowRestore} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'

const Navigation = ({open, x,toggleaccordion}) => {
// const [x, setx] = useState(false)
// const toggleaccordion = () =>{
//   setx(!x)
// }
  return (
    <>
    {/* // <div  className={open ? 'sidebar  show-sidebar' : 'sidebar '}> */}
    <div className='container' style={{height:'100vh',background:'#fff',width:x?'50px':'100%',marginLeft:x?'0px':'auto'}}>
      <div className="row">
        <div className="col-12 d-flex flex-wrap">
          <div className='sidebar' style={{height:'100%'}}>
            {/* <div className='tops d-flex' style={{height: '6vh'}}>
              {/* <img src="http://www.excellentsoftwares.com/Images/logo.png" alt="" style={{height:'6vh'}}/> */}

              {/* <h3 style={{fontStyle:'oblique', marginLeft:'1.5rem'}}>ES</h3> 
            </div> */}
            <div className='userhead d-flex'>
              <img src="ppc3.jpg" alt="" style={{width:'50px', height:'51px',display:x?'none':'flex'}}/>
              
     <button className='my-btn' style={{marginLeft:x?'0px':'83.9px'}}><span ><FaBars className='toggler text-muted'onClick={toggleaccordion}/></span></button>
              
              {/* <div><h4 className='bbbbbb'style={{justifyContent:'baseline',marginLeft:'1rem'}}>John Doe</h4></div> */}
            </div>
            <div><p className='text-muted spaced' style={{marginLeft:'1rem'}}>Main</p></div>
            {/* <div className='col-12'> */}
            <div className=' col-2 somecss' >
            <ul className='lists'>
              <li>
              <NavLink to='/content' className="text-muted" style={{textDecoration: 'none'}}><span className='pads' style={{width:'30px',height:'70px'}}><FaTh/></span></NavLink>
                
              </li>
              <li>
              <NavLink to='/prof' className="text-muted" style={{textDecoration: 'none'}}><span className='pads'><FaUser/></span></NavLink>
              </li>
              <li>
              <NavLink to='/prof' className="text-muted" style={{textDecoration: 'none'}}><span className='pads'><FaCheckSquare/></span></NavLink>
              </li>
              <li>
              <NavLink to='/prof' className="text-muted" style={{textDecoration: 'none'}}><span className='pads'><FaMobile/></span></NavLink>
              </li>
              <li>
              <NavLink to='/prof' className="text-muted" style={{textDecoration: 'none'}}><span className='pads'><FaDatabase/></span></NavLink>
                
              </li>
              <li>
              <NavLink to='/Leads' className="text-muted" style={{textDecoration: 'none'}}><span className='pads'><FaConnectdevelop/></span></NavLink>
                
              </li>
              <li>
              <NavLink to='/prof' className="text-muted" style={{textDecoration: 'none'}}><span className='pads'><FaUsers/></span></NavLink>
                
              </li>
              <li>
              <NavLink to='/prof' className="text-muted" style={{textDecoration: 'none'}}><span className='pads'><FaProductHunt/></span></NavLink>
              </li>
              <li>
              <NavLink to='/prof' className="text-muted" style={{textDecoration: 'none'}}><span  className='pads'><FaBook/></span></NavLink>
              </li>
              <li>
              <NavLink to='/prof' className="text-muted" style={{textDecoration: 'none'}}><span className='pads'><FaCalendar/></span></NavLink>
              </li>
              <li>
              <NavLink to='/prof' className="text-muted" style={{textDecoration: 'none'}}><span className='pads'><FaWindowRestore/></span></NavLink>
              </li>
              <li>
              <NavLink to='/prof' className="text-muted" style={{textDecoration: 'none'}}><span className='pads'><FaStickyNote/></span></NavLink>
              </li>
              <li>
              <NavLink to='/prof' className="text-muted" style={{textDecoration: 'none'}}><span className='pads'><FaEnvelopeOpen/></span></NavLink>
              </li>
              <li>
              <NavLink to='/Settings' className="text-muted" style={{textDecoration: 'none'}}><span className='pads'><FaCog/></span></NavLink>
              </li>
            </ul>
          </div>
          <div className=' col-10 somecss' style={{display: x?'none':'block'}}>
            <ul className='lists'>
              <li>
              <NavLink to='/content' className="text-muted" style={{textDecoration: 'none'}}>Dashboard</NavLink>
                
              </li>
              <li>
              <NavLink to='/prof' className="text-muted" style={{textDecoration: 'none'}}>My Profile</NavLink>
              </li>
              <li>
              <NavLink to='./prof' className="text-muted" style={{textDecoration: 'none'}}>Tasks</NavLink>
              </li>
              <li>
              <NavLink to='/prof' className="text-muted" style={{textDecoration: 'none'}}>Contacts</NavLink>
              </li>
              <li>
              <NavLink to='/prof' className="text-muted" style={{textDecoration: 'none'}}>Companies</NavLink>
                
              </li>
              <li>
              <NavLink to='/Leads' className="text-muted" style={{textDecoration: 'none'}}>Leads</NavLink>
                
              </li>
              {/* <li>
              <NavLink to='/Lead-form' className="text-muted" style={{textDecoration: 'none'}}>Lead Form</NavLink>
                
              </li> */}
              <li>
              <NavLink to='/prof' className="text-muted" style={{textDecoration: 'none'}}>Deals</NavLink>
             
              </li>
              <li>
              <NavLink to='/prof' className="text-muted" style={{textDecoration: 'none'}}>Projects</NavLink>
              </li>
              <li>
              <NavLink to='/prof' className="text-muted" style={{textDecoration: 'none'}}>Reports</NavLink>
              </li>
              <li>
              <NavLink to='/prof' className="text-muted" style={{textDecoration: 'none'}}>Activities</NavLink>
              </li>
              <li>
              <NavLink to='/prof' className="text-muted" style={{textDecoration: 'none'}}>Blogs</NavLink>
              </li>
              <li>
              <NavLink to='/prof' className="text-muted" style={{textDecoration: 'none'}}>Invoices</NavLink>
              </li>
              <li>
              <NavLink to='/Email' className="text-muted" style={{textDecoration: 'none'}}>Email</NavLink>
              </li>
              <li>
              <NavLink to='/Settings' className="text-muted" style={{textDecoration: 'none'}}>Settings</NavLink>
              </li>
            </ul>
          </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
    {/* // </div> */}
    
    </>
  )
}

export default Navigation
