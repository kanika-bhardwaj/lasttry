import React, { useState, useEffect } from 'react'
import './Profile.css'
import {Fa, FaPen, FaTimes} from 'react-icons/fa'
import Modal from 'react-modal'
const Profile = () => {
    const [tableData, setTableData]=useState([])
    const [tableData1, setTableData1]=useState([])
    const [tableData2, setTableData2]=useState([])
    const [tableData3, setTableData3]=useState([])
    const [tableData4, setTableData4]=useState([])
    const [tableData5, setTableData5]=useState([])
    const [inputValues, setInputValues] = useState({
        
        pno:"",
        ped:"",
        tel:"",
        nat:"",
        rel:"",
        mars:"",
        eos:"",
        child:""
    })
    const [inputValues1, setInputValues1] = useState({
        
        typ:"",
        naam:"",
        rishta:"",
        sampark:"",
    })
    const [inputValues2, setInputValues2] = useState({
        
        name:"",
        acc:"",
        ifsc:"",
        paan:"",
    })
    const [inputValues3, setInputValues3] = useState({
        
        pehchan:"",
        rishtaa:"",
        pedaish:"",
        samparks:"",
    })
    const [inputValues4, setInputValues4] = useState({
        
        jagah:"",
        padhai:"",
        samay:"",
    })
    const [inputValues5, setInputValues5] = useState({
        
        karya:"",
        time:"",
    })
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputValues({...inputValues, [name]:value})
        
        }
            const handleInput1 = (e) => {
                const name = e.target.name;
                const value = e.target.value;
                setInputValues1({...inputValues, [name]:value})
                
                }
                const handleInput2 = (e) => {
                    const name = e.target.name;
                    const value = e.target.value;
                    setInputValues2({...inputValues, [name]:value})
                    
                    }
                    const handleInput3 = (e) => {
                        const name = e.target.name;
                        const value = e.target.value;
                        setInputValues3({...inputValues, [name]:value})
                        
                        }
                        const handleInput4 = (e) => {
                            const name = e.target.name;
                            const value = e.target.value;
                            setInputValues4({...inputValues, [name]:value})
                            
                            }
                            const handleInput5 = (e) => {
                                const name = e.target.name;
                                const value = e.target.value;
                                setInputValues5({...inputValues, [name]:value})
                                
                                }
        
        const submitHandler = (e) => {
        e.preventDefault()
        
        const data = {...inputValues}
        console.log(data,'data')
        // const jsonData = 
        //     {
        //         FullName:data.fullname,
        //         LastName:data.lastName,
        //         Address:data.address
        //     }
        
        
        // console.log(jsonData, 'jsonData')
        // console.log(inputValues, 'kanika')
        
         fetch('https://64ad4a4bb470006a5ec5b3d8.mockapi.io/Profile_data', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify( {
                Pno:data.pno,
                Ped:data.ped,
                Tel:data.tel,
                Nat:data.nat,
                Rel:data.rel,
                Mars: data.mars,
                Eos:data.eos,
                Child:data.child
            })
           
        
        })
        .then(res => res.json())
        .then(data => console.log(data, "data of submit"))
        
        setInputValues(
            {
                pno:"",
                ped:"",
                tel:"",
                nat:"",
                rel:"",
                mars:"",
                eos:"",
                child:""
            }
        )
        
        }
        const submitHandler1 = (e) => {
            e.preventDefault()
            
            const data = {...inputValues}
            console.log(data,'data')
            // const jsonData = 
            //     {
            //         FullName:data.fullname,
            //         LastName:data.lastName,
            //         Address:data.address
            //     }
            
            
            // console.log(jsonData, 'jsonData')
            // console.log(inputValues, 'kanika')
            
             fetch('https://64ad4a4bb470006a5ec5b3d8.mockapi.io/Profile_data', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify( {
                    Typ:data.typ,
                    Naam:data.naam,
                    Rishta:data.rishta,
                    Sampark:data.sampark,
                })
               
            
            })
            .then(res => res.json())
            .then(data => console.log(data, "data of submit"))
            
            setInputValues(
                {
                    typ:"",
                    naam:"",
                    rishta:"",
                    sampark:"",
                }
            )
            
            }
        const submitHandler2 = (e) => {
                e.preventDefault()
                
                const data = {...inputValues}
                console.log(data,'data')
                // const jsonData = 
                //     {
                //         FullName:data.fullname,
                //         LastName:data.lastName,
                //         Address:data.address
                //     }
                
                
                // console.log(jsonData, 'jsonData')
                // console.log(inputValues, 'kanika')
                
                 fetch('https://64ad4a4bb470006a5ec5b3d8.mockapi.io/Profile_data', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },
                    body: JSON.stringify( {
                        BankName:data.name,
                        Acount:data.acc,
                        IFSC:data.ifsc,
                        PAN:data.paan,
                    })
                   
                
                })
                .then(res => res.json())
                .then(data => console.log(data, "data of submit"))
                
                setInputValues(
                    {
                        name:"",
                        acc:"",
                        ifsc:"",
                        paan:"",
                    }
                )
                
            }
        const submitHandler3 = (e) => {
                    e.preventDefault()
                    
                    const data = {...inputValues}
                    console.log(data,'data')
                    // const jsonData = 
                    //     {
                    //         FullName:data.fullname,
                    //         LastName:data.lastName,
                    //         Address:data.address
                    //     }
                    
                    
                    // console.log(jsonData, 'jsonData')
                    // console.log(inputValues, 'kanika')
                    
                     fetch('https://64ad4a4bb470006a5ec5b3d8.mockapi.io/Profile_data', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                          },
                        body: JSON.stringify( {
                            Identity:data.name,
                            Relationship: data.rishtaa,
                            Birth:data.pedaish,
                            Samparks:data.samparks
                        })
                       
                    
                    })
                    .then(res => res.json())
                    .then(data => console.log(data, "data of submit"))
                    
                    setInputValues(
                        {
                            pehchan:"",
                            rishtaa:"",
                            pedaish:"",
                            samparks:"",
                        }
                    )
                    
            }
        const submitHandler4 = (e) => {
                        e.preventDefault()
                        
                        const data = {...inputValues}
                        console.log(data,'data')
                        // const jsonData = 
                        //     {
                        //         FullName:data.fullname,
                        //         LastName:data.lastName,
                        //         Address:data.address
                        //     }
                        
                        
                        // console.log(jsonData, 'jsonData')
                        // console.log(inputValues, 'kanika')
                        
                         fetch('https://64ad4a4bb470006a5ec5b3d8.mockapi.io/Profile_data', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                              },
                            body: JSON.stringify( {
                                place:data.jagah,
                                Study:data.padhai,
                                Waqt:data.samay,
                            })
                           
                        
                        })
                        .then(res => res.json())
                        .then(data => console.log(data, "data of submit"))
                        
                        setInputValues(
                            {
                                jagah:"",
                                padhai:"",
                                samay:"",
                            }
                        )
                        
            }
        const submitHandler5 = (e) => {
                            e.preventDefault()
                            
                            const data = {...inputValues}
                            console.log(data,'data')
                            // const jsonData = 
                            //     {
                            //         FullName:data.fullname,
                            //         LastName:data.lastName,
                            //         Address:data.address
                            //     }
                            
                            
                            // console.log(jsonData, 'jsonData')
                            // console.log(inputValues, 'kanika')
                            
                             fetch('https://64ad4a4bb470006a5ec5b3d8.mockapi.io/Profile_data', {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                  },
                                body: JSON.stringify( {
                                    Job:data.karya,
                                    Time:data.time
                                })
                               
                            
                            })
                            .then(res => res.json())
                            .then(data => console.log(data, "data of submit"))
                            
                            setInputValues(
                                {
                                    karya:"",
                                    time:"",
                                }
                            )
                            
            }
        
        const getDetail = async() => {
            try{
            const resp = await fetch('https://64ad4a4bb470006a5ec5b3d8.mockapi.io/Profile_data')
            const res = await resp.json()
            console.log(res, 'getting data from api')
            setTableData(res)
            setTableData1(res)
            setTableData2(res)
            setTableData3(res)
            setTableData4(res)
            setTableData5(res)
            }catch(error){
                console.log(error)
            }
        }
        
        useEffect(() => {
            getDetail()
        },[])
    const [modalIsOpen, setIsOpen] = useState(false)
    const[modalIsOpen1,setIsOpen1] = useState(false)
    const[modalIsOpen2,setIsOpen2] = useState(false)
    const[modalIsOpen3,setIsOpen3] = useState(false)
    const[modalIsOpen4,setIsOpen4] = useState(false)
    const[modalIsOpen5,setIsOpen5] = useState(false)
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#f8f7f7',
        },
      };
      function closeModal2(){
        setIsOpen1(false)
      }
      function isOpenModal2() {
        setIsOpen1(true)
      }
      function closeModal3(){
        setIsOpen2(false)
      }
      function isOpenModal3() {
        setIsOpen2(true)
      }
      function closeModal4(){
        setIsOpen3(false)
      }
      function isOpenModal4() {
        setIsOpen3(true)
      }
      function closeModal5(){
        setIsOpen4(false)
      }
      function isOpenModal5() {
        setIsOpen4(true)
      }
      function closeModal6(){
        setIsOpen5(false)
      }
      function isOpenModal6() {
        setIsOpen5(true)
      }
      function closeModal() {
        setIsOpen(false);
    }
    const isOpenModal = () => {      
        setIsOpen(true);    
      }
  return (
    <>
    <div className='container'>
        <div className='col-12 d-flex flex-wrap'>
{/*Header*/ }    <div className='col-12'>
          <div className='content-header d-flex justify-content-baseline'>
            <img src="http://www.excellentsoftwares.com/Images/logo.png" alt="es-logo" style={{width:''}} />
            <h3 style={{fontFamily:'Times New Roman, Times, serif'}} >Employee Profile</h3>
          </div>
        </div>
        <div className='col-12 biom d-flex'>
            <div className='col-lg-6 col-md-8 col-12 comp-det d-flex'>
                <div className='col-12'>
                <div class=" mb-3" style={{maxWidth: "540px;"}}>
  <div className=" ui2 row g-0">
    <div className="col-md-4">
      <img src="ppc3.jpg" className="img-fluid rounded" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">John Doe</h5>
        <p className="card-text"><small className="text-muted">UI/UX Designer</small></p>
        <p className="card-text"><small className="text-muted">Web Designer</small></p>
        <p className='card-text fw-bold'>Employee ID: FT-0001</p>
        <p className='card-text'><small className="text-muted">Date of Joining: 1st Jan 2013</small></p>
        <button className='btn btn-custom fw-bold'>Send Message</button>
      </div>
    </div>
  </div>
</div>
                </div>
            </div>
            <div className='col-lg-6 col-md-8 col-12 bios'>
                <div className='metrics'>
                    <table className='table table-borderless table-responsive'>
                        <tbody>
                            <tr>
                                <td className='fw-bold'>Phone:</td>
                                <td className='text-primary'>91XXXXXXXX</td>
                            </tr>
                            <tr>
                                <td className='fw-bold'>Email:</td>
                                <td className='text-primary'>myemail@company.com</td>
                            </tr>
                            <tr>
                                <td className='fw-bold'>Birthday:</td>
                                <td className='text-muted'>12 February</td>
                            </tr>
                            <tr>
                                <td className='fw-bold'>Address</td>
                                <td className='text-muted'>A-376 Govindpuri Delhi</td>
                            </tr>
                            <tr>
                                <td className='fw-bold'>Gender</td>
                                <td className='text-muted'>Male</td>
                            </tr>
                            <tr>
                                <td className='fw-bold'>Reports to:</td>
                                <td className='text-primary'>Rohan</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className='col-6 my' style={{backgroundColor:'#fff',marginLeft:'40px'}}>
            <div className='lead-head d-flex justify-content-center'>
                <h3 className='fw-bold' style={{marginLeft:'100px'}}>Personal Information</h3>
                <div className='gaps'></div>
                <button onClick={isOpenModal} style={{float:'right',marginLeft:'100px',borderStyle:'none',backgroundColor:'#fff'}}><span><FaPen/></span></button>
            </div>
            <hr />
            <div className='representation'>
                <table className='table table-borderless table-responsive table-horizontal'>
                    <tbody>
                    {/* {
        tableData.map((item, index) => {
    return(
        <> */}
                        <tr>
                            <th className='fw-bold'>Passport No.:</th>
                            <td className='text-muted'></td>
                        </tr >
                        <tr>
                            <th className='fw-bold'>Passport Exp. Date:</th>
                            <td className='text-muted'></td>
                        </tr>
                        <tr >
                            <td className='fw-bold'>Tel.:</td>
                            <td className='text-primary'></td>
                        </tr>
                        <tr >
                            <td className='fw-bold'>Nationality:</td>
                            <td className='text-muted'></td>
                        </tr>
                        <tr >
                            <td className='fw-bold'>Religion:</td>
                            <td className='text-muted'></td>
                        </tr>
                        <tr >
                            <td className='fw-bold'>Marital Status:</td>
                            <td className='text-muted'></td>
                        </tr>
                        <tr >
                            <td className='fw-bold'>Employment of spouse:</td>
                            <td className='text-muted'></td>
                        </tr>
                        <tr >
                            <td className='fw-bold'>No. of Children:</td>
                            <td className='text-muted'></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='col-6 my' style={{backgroundColor:'#fff',marginLeft:'40px'}}>
        <div className='lead-head d-flex'>
                <h3 className='fw-bold' style={{marginLeft:'100px'}}>Emergency Contacts</h3>
                <div className='gaps'></div>
                <button onClick={isOpenModal2} style={{float:'right',marginLeft:'100px',borderStyle:'none',backgroundColor:'#fff'}}><span><FaPen/></span></button>
            </div>
            <hr />
            <div className='representation'>
                <table className='table table-borderless table-responsive'>
                    <caption className='fw-bold'style={{captionSide:'top'}}>
                        Primary
                    </caption>
                    <tbody>
                        <tr>
                            <td className='fw-bold'>Name</td>
                            <td className='text-muted'>Meghraj</td>
                        </tr>
                        <tr>
                            <td className='fw-bold'>Relationship</td>
                            <td className='text-muted'>Father</td>
                        </tr>
                        <tr>
                            <td className='fw-bold'>Contact</td>
                            <td className='text-primary'>70600XXXXX</td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <table className='table table-borderless table-responsive'>
                    <caption className='fw-bold'style={{captionSide:'top'}}>
                        Secondary
                    </caption>
                    <tbody>
                        <tr>
                            <td className='fw-bold'>Name</td>
                            <td className='text-muted'>Jaya</td>
                        </tr>
                        <tr>
                            <td className='fw-bold'>Relationship</td>
                            <td className='text-muted'>Mother</td>
                        </tr>
                        <tr>
                            <td className='fw-bold'>Contact</td>
                            <td className='text-primary'>70604XXXXX</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='col-6 my1' style={{marginLeft:'40px'}}>
            <div className='lead-head d-flex'>
                <h3 className='fw-bold' style={{marginLeft:'100px'}}>Bank Details</h3>
                <button onClick={isOpenModal3} style={{float:'right',marginLeft:'100px',borderStyle:'none',backgroundColor:'#fff'}}><span><FaPen/></span></button>
            </div>
            <hr />
            <div className='representation'>
                <table className='table table-borderless table-responsive'>
                    <tbody>
                        <tr>
                            <td className='fw-bold'>Bank Name</td>
                            <td className='text-muted'>ICICI Bank</td>
                        </tr>
                        <tr>
                            <td className='fw-bold'>Bank Account No.</td>
                            <td className='text-muted'>1234 5678 9012 3456</td>
                        </tr>
                        <tr>
                            <td className='fw-bold'>IFSC Code</td>
                            <td className='text-muted'>ICI24504</td>
                        </tr>
                        <tr>
                            <td className='fw-bold'>PAN No.</td>
                            <td className='text-muted'>TC000Y56</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='col-6 my1' style={{marginLeft:'40px'}}>
        <div className='lead-head d-flex'>
                <h3 className='fw-bold' style={{marginLeft:'100px'}}>Family Details</h3>
                <button onClick={isOpenModal4} style={{float:'right',marginLeft:'100px',borderStyle:'none',backgroundColor:'#fff'}}><span><FaPen/></span></button>
            </div>
            <hr />
            <div className='representation'>
                <table className='table table-borderless table-responsive'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Relationship</th>
                            <th>DOB</th>
                            <th>Phone number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Kashish</td><td>Sister</td><td>02 July 2001</td><td>76687XXXXX</td></tr>
                        <tr><td>Kartikey</td><td>Brother</td><td>22 July 2006</td><td>76687XXXXX</td></tr>
                    </tbody>
                </table>
                {/* <br /><hr /> */}
            </div>
        </div>
        <div className='col-6 my1' style={{marginLeft:'40px'}}>
            <div className='lead-head d-flex'>
                <h3 className='fw-bold'style={{marginLeft:'100px'}} >Educational Qualifications</h3>
                <button onClick={isOpenModal5} style={{float:'right',marginLeft:'100px',borderStyle:'none',backgroundColor:'#fff'}}><span><FaPen/></span></button>
            </div>
            <hr />
            {/* <div className='representation'>
                <ul>
                    <li>
                        <h3 className='fw-bold'>IIT Delhi</h3>
                        <p className='text-muted'>B Tech CSE</p>
                        <p className='text-muted'>2017-2021</p>
                    </li>
                    <li>
                    <h3 className='fw-bold'>IIT Delhi</h3>
                        <p className='text-muted'>M Tech CSE</p>
                        <p className='text-muted'>2017-2021</p>
                    </li>
                </ul>
            </div> */}
            {/* <div class="card-body"> */}
{/* <h3 class="card-title">Education Informations <a href="#" class="edit-icon" data-bs-toggle="modal" data-bs-target="#education_info"><i class="fa fa-pencil"></i></a></h3> */}
<div class="experience-box">
<ul class="experience-list">
<li>
<div class="experience-user">
<div class="before-circle"></div>
</div>
<div class="experience-content">
<div class="timeline-content">
<a href="#/" class="name" style={{color:'gray'}}>International College of Arts and Science (UG)</a>
<div>Bsc Computer Science</div>
<span class="time">2000 - 2003</span>
</div>
</div>
</li>
<li>
<div class="experience-user">
<div class="before-circle"></div>
</div>
<div class="experience-content">
<div class="timeline-content">
<a href="#/" class="name" style={{color:'gray'}}>International College of Arts and Science (PG)</a>
<div>Msc Computer Science</div>
<span class="time">2000 - 2003</span>
</div>
<div className='spaced'></div>
</div>
</li>
</ul>
</div>
{/* </div> */}
        </div>
        <div className='col-6 my1' style={{marginLeft:'40px'}}>
            <div className='lead-head d-flex'>
                <h3 className='fw-bold' style={{marginLeft:'100px'}}>Experience</h3>
                <button onClick={isOpenModal6} style={{float:'right',marginLeft:'100px',borderStyle:'none',backgroundColor:'#fff'}}><span><FaPen/></span></button>
            </div>
            <hr />
            <div class="experience-box">
<ul class="experience-list">
<li>
<div class="experience-user">
<div class="before-circle"></div>
</div>
<div class="experience-content">
<div class="timeline-content">
<a href="#" class="name fw-bold" style={{color:'gray'}}><h3>Web Designer at Zen Corporation</h3></a>
<span class="time">Jan 2013-Jan 2020</span>
</div>
</div>
</li>
<li>
<div class="experience-user">
<div class="before-circle"></div>
</div>
<div class="experience-content">
<div class="timeline-content">
<a href="#" class="name fw-bold" style={{color:'gray'}}><h3>Web Designer at Ren Corporation</h3></a>
<span class="time">Jan 2020-Present(3 years 7 months)</span>
</div>
</div>
</li>
</ul>
</div>
            </div>
        </div>
    </div>
    <div className="col-12 mx-3">
          <Modal
           isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            >
                <div className='letshead d-flex'>
                    <h3>Update Personal Details</h3>
                    <button onClick={closeModal} style={{marginLeft:'400px',borderRadius:'4px',backgroundColor:'red'}}><span><FaTimes /></span></button></div>
            <div style={{height: "500px", width:"700px"}} >
              <form action="">
                <div style={{padding:'5px'}}>
                <label htmlFor="">Passport Number</label>
                <input type="number" placeholder='Enter your passport number' style={{padding:'5px',margin:'6px'}}/>
                </div>
                <div style={{padding:'5px'}}>
                <label htmlFor="">Passport expiry date</label>
                <input type="date" name="" id="" placeholder='Expiry date' style={{padding:'5px',margin:'6px'}}/>
                </div>
                <div style={{padding:'5px'}}>
                <label htmlFor="">Telephone number</label>
                <input type="number" placeholder='Enter your Telephone number' style={{padding:'5px',margin:'6px'}}/>
                </div>
                <div style={{padding:'5px'}}>
                <label htmlFor="nationality">Nationality</label>
                {/* <input type="" placeholder='' style={{padding:'5px',margin:'6px'}}/> */}
                <select id="nationality" style={{padding:'5px',margin:'6px'}}>
  <option value="Indian">Indian</option>
  <option value="England">Englandian</option>
  <option value="America">American</option>
</select>
                </div>
                <div style={{padding:'5px'}}>
                <label htmlFor="">Religion</label>
                <input type="text" placeholder='Enter your religion' style={{padding:'5px',margin:'6px'}}/>
                </div>
                <div style={{padding:'5px'}}>
                <label htmlFor="shadi">Marital Status</label>
                <select id="shadi" style={{padding:'5px',margin:'6px'}}>
  <option value="Married">Married</option>
  <option value="Unmarried">Unmarried</option>
</select>
                </div>
                <div style={{padding:'5px'}}>
                <label htmlFor="">Employment of Spouse</label>
                <input type="text" placeholder='specify their employment' style={{padding:'5px',margin:'6px'}}/>
                </div>
                <div style={{padding:'5px'}}>
                <label htmlFor="">Number of Children</label>
                <input type="text" placeholder='specify no. of children' style={{padding:'5px',margin:'6px'}}/>
                </div>
              </form>
            </div>
         
          
        <div className="d-flex justify-content-center">
            <button type="submit" className='rounded'style={{backgroundColor:'cornflowerblue',marginRight:'20px',borderStyle:'none'}}>Update Details</button>
        {/* <button  className= "btn btn-success px-4 rounded me-3" >UnAllocate</button> */}
        <button onClick={closeModal} className="btn btn-danger px-4 rounded" >Cancel</button>
        </div>
          </Modal>
    </div>
    <div className="col-12 mx-3">
          <Modal
           isOpen={modalIsOpen1}
            onRequestClose={closeModal2}
            style={customStyles}
            >
                <div className='letshead d-flex'>
                    <h3>Update Emergency Contacts</h3>
                    <button onClick={closeModal2} style={{marginLeft:'400px',borderRadius:'4px',backgroundColor:'red'}}><span><FaTimes /></span></button>
                </div>
            <div style={{height: "200px", width:"300px"}} >
              <form action="">
                <div style={{padding:'5px'}}>
                <label htmlFor="prio">Type</label>
                {/* <input type="number" placeholder='Enter your passport number' style={{padding:'5px',margin:'6px'}}/> */}
                <select name="" id="prio"  style={{padding:'5px',margin:'6px'}}>
                    <option value="Prim">Primary</option>
                    <option value="sec">Secondary</option>
                    <option value="other">Other</option>
                </select>
                </div>
                <div style={{padding:'5px'}}>
                    <label htmlFor="">Name:</label>
                    <input type="text"  style={{padding:'5px',margin:'6px'}}/>
                    <label htmlFor="">Relationship:</label>
                    <input type="text"  style={{padding:'5px',margin:'6px'}}/>
                    <label htmlFor="">Contact:</label>
                    <input type="number"  style={{padding:'5px',margin:'6px'}} />
                </div>
              </form>
            </div>
         
          
        <div className="d-flex justify-content-center">
            <button type="submit" className='rounded'style={{backgroundColor:'cornflowerblue',marginRight:'20px',borderStyle:'none'}}>Update Details</button>
        {/* <button  className= "btn btn-success px-4 rounded me-3" >UnAllocate</button> */}
        <button onClick={closeModal2} className="btn btn-danger px-4 rounded" >Cancel</button>
        </div>
          </Modal>
    </div>
    <div className='col-12 mx-3'>
    <Modal
           isOpen={modalIsOpen2}
            onRequestClose={closeModal3}
            style={customStyles}>
                <div className='letshead d-flex'>
                    <h3>Update Bank Details</h3>
                    <button onClick={closeModal3} style={{marginLeft:'400px',borderRadius:'4px',backgroundColor:'red'}}><span><FaTimes /></span></button>
                </div>
            <div style={{height: "200px", width:"650px"}} >
                <form action="">
                    <div style={{padding:'5px'}}>
                    <label htmlFor="">Bank Name</label>
                    <input type="text" name="" id="" />
                    </div>
                    <div style={{padding:'5px'}}>
                    <label htmlFor="">Bank Account Number</label>
                    <input type="number" name="" id="" />
                    </div>
                    <div style={{padding:'5px'}}>
                    <label htmlFor="">IFSC Code</label>
                    <input type="text" name="" id="" />
                    </div>
                    <div style={{padding:'5px'}}>
                    <label htmlFor="">Pan No.</label>
                    <input type="text" name="" id="" />
                    </div>
                </form>
            </div>
        <div className="d-flex justify-content-center">
            <button type="submit" className='rounded' style={{backgroundColor:'cornflowerblue',marginRight:'20px',borderStyle:'none'}}>Update</button>
        {/* <button  className= "btn btn-success px-4 rounded me-3" >UnAllocate</button> */}
        <button onClick={closeModal3} className="btn btn-danger px-4 rounded" >Cancel</button>
        </div>
          </Modal>
          </div>
    <div className='col-12 mx-3'>
    <Modal
           isOpen={modalIsOpen3}
            onRequestClose={closeModal4}
            style={customStyles}>
            <div className='letshead d-flex'>
                    <h3>Update Family Details</h3>
                    <button onClick={closeModal4} style={{marginLeft:'400px',borderRadius:'4px',backgroundColor:'red'}}><span><FaTimes /></span></button>
                </div>
            <div style={{height: "200px", width:"650px"}} >
                <form action="">
                    <div style={{padding:'5px'}}>
                    <label htmlFor="">Name</label>
                    <input type="text" name="" id=""  style={{padding:'5px',margin:'6px'}} />
                    </div>
                    <div style={{padding:'5px'}}>
                    <label htmlFor="">Relationship</label>
                    <input type="text" name="" id=""  style={{padding:'5px',margin:'6px'}}/>
                    </div>
                    <div style={{padding:'5px'}}>
                    <label htmlFor="">DOB</label>
                    <input type="date" name="" id=""  style={{padding:'5px',margin:'6px'}}/>
                    </div>
                    <div style={{padding:'5px'}}>
                    <label htmlFor="">Phone No.</label>
                    <input type="number" name="" id=""  style={{padding:'5px',margin:'6px'}}/>
                    </div>
                </form>
            </div>
        <div className="d-flex justify-content-center">
            <button type="submit" className='rounded' style={{backgroundColor:'cornflowerblue',marginRight:'20px',borderStyle:'none'}}>Update</button>
        {/* <button  className= "btn btn-success px-4 rounded me-3" >UnAllocate</button> */}
        <button onClick={closeModal4} className="btn btn-danger px-4 rounded" >Cancel</button>
        </div>
          </Modal>
          </div>
          <div className='col-12 mx-3'>
    <Modal
           isOpen={modalIsOpen4}
            onRequestClose={closeModal5}
            style={customStyles}>
            <div className='letshead d-flex'>
                    <h3>Update Qualifications</h3>
                    <button onClick={closeModal5} style={{marginLeft:'400px',borderRadius:'4px',backgroundColor:'red'}}><span><FaTimes /></span></button>
                </div>
            <div style={{height: "200px", width:"650px"}} >
                <form action="">
                    <div style={{padding:'5px'}}>
                    <label htmlFor="">Institute/University name</label>
                    <input type="text" name="" id=""  style={{padding:'5px',margin:'6px'}} />
                    </div>
                    <div style={{padding:'5px'}}>
                    <label htmlFor="">Course covered</label>
                    <input type="text" name="" id=""  style={{padding:'5px',margin:'6px'}}/>
                    </div>
                    <div style={{padding:'5px'}}>
                    <label htmlFor="">Duration of course</label>
                    <input type="date" name="" id=""  style={{padding:'5px',margin:'6px'}}/>
                    <input type="date"  style={{padding:'5px',margin:'6px'}}/>
                    </div>
                    
                    {/* <div style={{padding:'5px'}}>
                    <label htmlFor="">Phone No.</label>
                    <input type="number" name="" id=""  style={{padding:'5px',margin:'6px'}}/>
                    </div> */}
                </form>
            </div>
        <div className="d-flex justify-content-center">
            <button type="submit" className='rounded' style={{backgroundColor:'cornflowerblue',marginRight:'20px',borderStyle:'none'}}>Update</button>
        {/* <button  className= "btn btn-success px-4 rounded me-3" >UnAllocate</button> */}
        <button onClick={closeModal5} className="btn btn-danger px-4 rounded" >Cancel</button>
        </div>
          </Modal>
          </div>
          <div className='col-12 mx-3'>
    <Modal
           isOpen={modalIsOpen5}
            onRequestClose={closeModal6}
            style={customStyles}>
            <div className='letshead d-flex'>
                    <h3>Add Experience</h3>
                    <button onClick={closeModal6} style={{marginLeft:'400px',borderRadius:'4px',backgroundColor:'red'}}><span><FaTimes /></span></button>
                </div>
            <div style={{height: "200px", width:"650px"}} >
                <form action="">
                    <div style={{padding:'5px'}}>
                    <label htmlFor="">Role</label>
                    <input type="text" name="" id=""  style={{padding:'5px',margin:'6px'}} />
                    </div>
                    <div style={{padding:'5px'}}>
                    <label htmlFor="">Corporation</label>
                    <input type="text" name="" id=""  style={{padding:'5px',margin:'6px'}}/>
                    </div>
                    <div style={{padding:'5px'}}>
                    <label htmlFor="">Duration of job</label>
                    <input type="date" placeholder='start date' name="" id=""  style={{padding:'5px',margin:'6px'}}/>
                    <input type="date" placeholder='end date' style={{padding:'5px',margin:'6px'}}/>
                    </div>
                    
                    {/* <div style={{padding:'5px'}}>
                    <label htmlFor="">Phone No.</label>
                    <input type="number" name="" id=""  style={{padding:'5px',margin:'6px'}}/>
                    </div> */}
                </form>
            </div>
        <div className="d-flex justify-content-center">
            <button type="submit" className='rounded' style={{backgroundColor:'cornflowerblue',marginRight:'20px',borderStyle:'none'}}>Update</button>
        {/* <button  className= "btn btn-success px-4 rounded me-3" >UnAllocate</button> */}
        <button onClick={closeModal6} className="btn btn-danger px-4 rounded" >Cancel</button>
        </div>
          </Modal>
          </div>

    </>

  )
}

export default Profile
