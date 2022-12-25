import React from 'react';
// import BootstrapTable from 'react-bootstrap-table-next';
// import 'react-bootstra-table-next/dist/react-bootstrap-table2.css';
import MockData from './../MOCK_DATA.json';//mockaroo.com for data
import { useState } from 'react';
function Table(){
    const [search,setSearch]=useState("");
    return(
         <div className='container'>
            <h1>Table</h1>
            <input type='text' placeholder='Search...' className='form-control' style={{marginTop:50,marginBottom:20,width:'40%'}}
            onChange={(e)=>{setSearch(e.target.value)}}/>
          <table className='table table-bordered'>
            <thead className='thead-dark'>
                <tr> 
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {MockData.filter((val)=>{
                   if(search===''){
                    return val
                   }else if(
                    val.first_name.toLowerCase().includes(search.toLowerCase()) ||
                    val.last_name.toLowerCase().includes(search.toLowerCase()) ||
                    val.email.toLowerCase().includes(search.toLowerCase())
                   )
                   {
                     return val;
                   }
                }).map(m=>(
                    <tr key={m.id}>
                      <td>{m.first_name}</td>
                      <td>{m.last_name}</td>
                      <td>{m.email}</td>
                      <td>{m.gender}</td>
                    </tr>
                ))}
            </tbody>
          </table>
         </div> 
    )
}
export default Table;