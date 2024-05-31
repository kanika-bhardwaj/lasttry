import React, {useRef, useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.css'
import Content from '../Dashboard/Content'
import Navigation,{x,toggleaccordion} from '../Navigation Bar/Navigation'
import Header from '../Header/Header'
import Profile from '../Profile/Profile'


const Layout = () => {
  const [x, setx] = useState(false)
const toggleaccordion = () =>{
  setx(!x)
}
  // let sidebarRef = useRef()
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  
  // /** toggle mobile sidebar */
  // const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  
  // /** hide mobile sidebar on click outside of sidebar */
  // const handleClickOutside = () => setIsSidebarOpen(false)

//---------------------------------------------------
// useEffect(() => {
//   /** hiding mobile sidebar onclick of backdrop*/
//   if (isSidebarOpen === true) {
//     let el = document.querySelector('.backdrop')
//     el.addEventListener('click', handleClickOutside, true);
//     return () => {
//       el.removeEventListener('click', handleClickOutside, true);
//     };
//   }
 
// }, [isSidebarOpen]);
  return (
    <>
    <div className="container-fluid  layout-main-ct">
    <div className='row'>
      <div className='col-12 ps-0 pe-0 '>
        <div className='col-1 sidebar-box ' id='my-content' style={{width:x?'4%':'12.5%'}}>
          {/* <SideNav/> */}
          {/* <div ref={sidebarRef} > */}
           {/* <div className={isSidebarOpen ? "backdrop d-lg-none d-block" : 'd-none'} ></div> */}
          <Navigation x={x} toggleaccordion={toggleaccordion}  /*open={isSidebarOpen}*//>
          </div>
        {/* </div> */}
        <div className='col-11 rightside-box pe-0' id='restall' style={{width:x?'96%':'87.5%',marginLeft:x?'4%':'12.5%'}} >
          {/* --header------------------------- */}
          <div className="col-12 top-header-box d-flex">
           <Header /*toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}*//>
          </div>
          {/* -------for content---------------------------------------------- */}
          <div className="col-12 content-ct pe-0">
            {/* <Content/> */}
            <Outlet /> 
           {/* <Profile/> */}
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
export default Layout
