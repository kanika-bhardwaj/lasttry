import React, { useEffect, useState } from 'react'
import './Leads.css'
import Modal from 'react-modal'
import { FaTimes } from 'react-icons/fa'
const Leads = () => {
    const [tableData, setTableData]=useState([])
    const [modalIsOpen, setIsOpen] = useState(false);
    const [inputValues, setInputValues] = useState({
        
        fullname:"",
        title:"",
        company:"",
        phoneno:"",
        email:"",
        leadstat:"",
        leadcret:"",
        leadOwner:""
    })
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
      function closeModal() {
        setIsOpen(false);
    }
    const isOpenModal = () => {      
        setIsOpen(true);    
      }
 


//---input handler fun--------------------
const handleInput = (e) => {
const name = e.target.name;
const value = e.target.value;
setInputValues({...inputValues, [name]:value})

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

 fetch('https://64abcd339edb4181202e90a3.mockapi.io/Leadschart', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    body: JSON.stringify( {
        FullName:data.fullname,
        Title:data.title,
        Company:data.company,
        Phoneno:data.phoneno,
        Email:data.email,
        Leadstatus: data.leadstat,
        Leadcreated:data.leadcret,
        LeadOwner:data.leadOwner
    })
   

})
.then(res => res.json())
.then(data => console.log(data, "data of submit"))

setInputValues(
    {
        fullname:"",
        title:"",
        company:"",
        phoneno:"",
        email:"",
        leadstat:"",
        leadcret:"",
        leadOwner:""
    }
)

}

const getDetail = async() => {
    try{
    const resp = await fetch('https://64abcd339edb4181202e90a3.mockapi.io/Leadschart')
    const res = await resp.json()
    console.log(res, 'getting data from api')
    setTableData(res)
    }catch(error){
        console.log(error)
    }
}

useEffect(() => {
    getDetail()
},[])

  return (
    <>
    <div className='container'>
        <div className='col-12'>
        <div className='col-12'>
          <div className='content-header d-flex justify-content-baseline'>
            <img src="http://www.excellentsoftwares.com/Images/logo.png" alt="es-logo" style={{width:''}} />
            <h3 style={{fontFamily:'Times New Roman, Times, serif'}} >Leads</h3>
          </div>
          <div className='col-12 d-flex '>
            <div className='row'>
            {/* <button className='newones fw-bold float-left'>All Leads</button> */}
            <button className='newones fw-bold float-right ' style={{marginLeft:'1050px',marginTop:'20px', marginRight:'30px'}} onClick={isOpenModal}> New Lead </button>
          </div>
          </div>
          <div className='col-12 datav'>
            <table className='table table-responsive table-striped table-borderless okii'>
                <thead>
                    <tr>
                        < th className='text-muted'>Fullname</ th>
                        < th className='text-muted'>Title</ th >
                        < th className='text-muted'>Company</ th>
                        < th className='text-muted'>Phone</ th>
                        < th className='text-muted'>Email Address</ th >
                        < th className='text-muted'>Lead Status</ th>
                        < th className='text-muted'>Lead Created</ th>
                        < th className='text-muted'>Lead Owner</th>
                        < th className='text-muted'>Actions</ th >
                    </tr>
                </thead>
                <tbody>
                {
        tableData.map((item, index) => {
    return(
        <>
        <tr key={index}>
         <td>{item.FullName}</td>
         <td>{item.Title}</td>
         <td>{item.Company}</td>
         <td>{item.Phoneno}</td>
         <td>{item.Email}</td>
         <td>{item.Leadstatus}</td>
         <td>{item.Leadcreated}</td>
         <td>{item.LeadOwner}</td>
        </tr>
        </>
    )
})
                }
              
            </tbody>
            </table>
          </div>
        </div>
        </div>
    </div>
    <div className='container-fluid'>
   <div className="row">
    {/*.....Modal....*/}
    <div className="col-12 d-flex justify-content-center align-items-center">
    <Modal
           isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            >
                <div className='ledhed d-flex justify-content-center'>
                    <h3>Add New Lead</h3>
                    <button onClick={closeModal} style={{marginLeft:'400px',borderRadius:'4px',backgroundColor:'red'}}><span><FaTimes /></span></button>
                </div>
        <div className="card bxdf col-8 p-4 mt-5" style={{width:'500px',height:'550px'}}>
            <form onSubmit={submitHandler}>
            <div className='mb-3'>
                <label className='form-label' htmlFor='fullname'>Full Name</label>
                <input type='text' name='fullname' className='form-control' value={inputValues.fullname} onChange={handleInput}/>
            </div>
            <div>
                <label className='form-label' htmlFor='title'>Title</label>
                <input type='text' name='title' className='form-control' value={inputValues.title} onChange={handleInput}/>
            </div>
            <div>
                <label className='form-label' htmlFor='company'> Company</label>
                <input type='text' name='company' className='form-control' value={inputValues.company} onChange={handleInput} />
            </div>
            <div>
                <label className='form-label' htmlFor='phoneno'> Phone number</label>
                <input type='number' name='phoneno' className='form-control' value={inputValues.phoneno} onChange={handleInput} />
            </div>
            <div>
                <label className='form-label' htmlFor='email'> Email</label>
                <input type='email' name='email' className='form-control' value={inputValues.email} onChange={handleInput} />
            </div>
            <div>
                <label className='form-label' htmlFor='leadstat'>Lead Status</label>
                <select name="leadstat" id="leadstat" className='form-control' value={inputValues.leadstat} onChange={handleInput}>
                    <option value="open-Contacted">open-Contacted</option>
                    <option value="open-Not-Contacted">open-Not-Contacted</option>
                </select>
                {/* <input type='text' name='leadstat' className='form-control' value={inputValues.leadstat} onChange={handleInput} /> */}
            </div>
            <div>
                <label className='form-label' htmlFor='leadcret'> Lead Created</label>
                <input type='datetime-local' name='leadcret' className='form-control' value={inputValues.leadcret} onChange={handleInput} />
            </div>
            <div>
                <label className='form-label' htmlFor='leadOwner'>LeadOwner</label>
                <input type='text' name='leadOwner' className='form-control' value={inputValues.leadOwner} onChange={handleInput} />
            </div>
            <div className='pt-4 pb-3'>
                <button type='submit' className='btn btn-primary px-4'>Save</button>
            </div>
            </form>
         
        </div>
        </Modal>
    </div>
   </div>
    </div>
    </>
  )
}

export default Leads
