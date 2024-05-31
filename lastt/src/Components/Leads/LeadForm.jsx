// import React, {useState, useEffect} from 'react'

// const LeadForm = () => {
// const [tableData, setTableData]=useState([])
// const [inputValues, setInputValues] = useState({
//     fullname:"",
//     lastName:"",
//     address:""
// })

// //---input handler fun--------------------
// const handleInput = (e) => {
// const name = e.target.name;
// const value = e.target.value;
// setInputValues({...inputValues, [name]:value})

// }

// const submitHandler = (e) => {
// e.preventDefault()

// const data = {...inputValues}
// // const jsonData = 
// //     {
// //         FullName:data.fullname,
// //         LastName:data.lastName,
// //         Address:data.address
// //     }


// // console.log(jsonData, 'jsonData')
// // console.log(inputValues, 'kanika')

//  fetch('https://64abcd339edb4181202e90a3.mockapi.io/lead', {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//     body: JSON.stringify( {
//         FullName:data.fullname,
//         LastName:data.lastName,
//         Address:data.address
//     })
   

// })
// .then(res => res.json())
// .then(data => console.log(data, "data of submit"))

// setInputValues(
//     {
//         fullname:"",
//         lastName:"",
//         address:""
//     }
// )

// }

// const getDeatl = async() => {
//     try{
//     const resp = await fetch('https://64abcd339edb4181202e90a3.mockapi.io/lead')
//     const res = await resp.json()
//     console.log(res, 'getting data from api')
//     setTableData(res)
//     }catch(error){
//         console.log(error)
//     }
// }

// useEffect(() => {
//     getDeatl()
// },[])






//   return (
//     <>
//     <div className='container-fluid'>
//    <div className="row">
//     <div className="col-12 d-flex justify-content-center align-items-center">
//         <div className="card col-8 p-4 mt-5">
//             <form onSubmit={submitHandler}>
//             <div className='mb-3'>
//                 <label className='form-label' htmlFor='fullname'>Full Name</label>
//                 <input type='text' name='fullname' className='form-control' value={inputValues.fullname} onChange={handleInput}/>
//             </div>
//             <div>
//                 <label className='form-label' htmlFor='lastName'>Last Name</label>
//                 <input type='text' name='lastName' className='form-control' value={inputValues.lastName} onChange={handleInput}/>
//             </div>
//             <div>
//                 <label className='form-label' htmlFor='address'> Address</label>
//                 <input type='text' name='address' className='form-control' value={inputValues.address} onChange={handleInput} />
//             </div>
//             <div className='pt-4 pb-3'>
//                 <button type='submit' className='btn btn-primary px-4'>Save</button>
//             </div>
//             </form>
         
//         </div>
//     </div>
//    </div>
//     </div>

//     <div className='container-fluid mt-5 pt-5'>
//       <div className="col-12">
//        <div className='mt-5 '>
//         <table className='table'>
//             <thead>
//                 <tr>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Address</th>
//                 </tr>
            
//             </thead>
//             <tbody>
//                 {
// tableData.map((item, index) => {
//     return(
//         <>
//         <tr key={item.id}>
//          <td>{item.FullName}</td>
//          <td>{item.LastName}</td>
//          <td>{item.Address}</td>
//         </tr>
//         </>
//     )
// })
//                 }
              
//             </tbody>
//         </table>

//        </div>
//       </div>
//     </div>
//     </>
//   )
// }

// export default LeadForm