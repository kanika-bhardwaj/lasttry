import React from 'react'
import './Content.css'
import Totalead from './Totalead'
import Yearlysales from './Yearlysales'
import Overview from './overview'
import Totalsales from './Totalsales'
import Yearlyprojects from './Yearlyprojects'
import TotRevenue from './TotRevenue'
import Salestats from './Salestats'
import Accomplished from './Accomplished'

const Content = () => {
  return (
    <div className='container'>
      <div className='col-12 d-flex flex-wrap justify-content-center'>
        <div className='col-12 tryyy'>
          <div className='content-header d-flex justify-content-baseline'>
            <img src="http://www.excellentsoftwares.com/Images/logo.png" alt="es-logo" style={{width:''}} />
            <h3 >Deals Dashboard</h3>
          </div>
        </div>
        <div className='col-lg-6 col-md-8 col-12'>
          <div className='my-total-lead'>
            <div className='lead-head'>
              <h3 className='fw-bold'>Total Lead</h3>
            </div>
            <div className='representation'>
              <Totalead />
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-8'>
          <div className='my-total-lead'>
            <div className='lead-head'>
              <h3 className='fw-bold'>Product Yearly Sales</h3>
            </div>
            <div className='representation'>
              <Yearlysales/>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-8'>
          <div className='my-overview'>
            <div className='lead-head '>
              <h3 className='fw-bold'>Sales Overview</h3>
            </div>
            <div className='representation'>
              <Overview/>
            </div>
          </div>
          
        </div>
        <div className='col-lg-6 col-md-8'>
        <div className='my-overview'>
            <div className='lead-head'>
              <h3 className='fw-bold'>Total Sales</h3>
            </div>
            <div className='representation'>
              <Totalsales/>
            </div>
          </div>
        </div>
        <div className='col-lg-5 col-md-8'>
        <div className='my-total-lead1'>
            <div className='lead-head'>
              <h3 className='fw-bold'>Yearly products</h3>
            </div>
            <div className='representation'>
              <Yearlyprojects/>
            </div>
          </div>
        </div>
        <div className='col-lg-7 col-md-12'>
        <div className='my-overview2'>
            <div className='lead-head'>
              <h3 className='fw-bold'>Total Revenue</h3>
            </div>
            <div className='representation2'>
              <TotRevenue/>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-8'>
          <div className='my-overview'>
            <div className='lead-head'>
              <h3 className='fw-bold'>Sales Statistics</h3>
            </div>
            <div className='representation'>
              <Salestats/>
            </div>
          </div>
          
        </div>
        <div className='col-lg-6 col-md-8'>
          <div className='my-overview'>
            <div className='lead-head'>
              <h3 className='fw-bold'>Tasks Completed</h3>
            </div>
            <div className='representation'>
              <Accomplished/>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Content