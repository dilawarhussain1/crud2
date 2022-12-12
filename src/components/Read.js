import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'semantic-ui-react';
import {Button}from 'semantic-ui-react';
import { Link } from 'react-router-dom';

  
function Read () {
const [APIData, setAPIData] = useState([]);

useEffect(() => {
    axios.get(`https://638f48cc9cbdb0dbe3226b06.mockapi.io/Admetion`)
        .then((response) => {
        setAPIData(response.data);
        })
}, [])

const setData = (data) => {
    let { id, firstName, fatherName,cnicNumber,fcnicNumber,
        dateBirth,phonNumber,fatherPhon, 
        address,whichClass} = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Father Name', fatherName);
    localStorage.setItem('CNIC NO', cnicNumber);
    localStorage.setItem('Father CNIC NO', fcnicNumber);
    localStorage.setItem('Date Of Birth', dateBirth);
    localStorage.setItem('Phone No', phonNumber);
    localStorage.setItem('Father CNIC NO', fatherPhon);
    localStorage.setItem('Address', address);
    localStorage.setItem('Which Class to Addmission?', whichClass);

    
}

   const onDelete = (id) => {
    axios.delete(`https://638f48cc9cbdb0dbe3226b06.mockapi.io/Admetion/${id}`)
 .then(() => {
    getData();
})
}
  const getData = () => {
    axios.get(`https://638f48cc9cbdb0dbe3226b06.mockapi.io/Admetion`)
        .then((getData) => {
             setAPIData(getData.data);
         })
}
return(
    <div>
        
        <h2 className='main-header'>داخلہ فارم براۓ جامعہ اسلامیہ باب العلوم کہروڑ پکا</h2>
        <Table singleLine>
         <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>First Name!</Table.HeaderCell>
                        <Table.HeaderCell>Father Name!</Table.HeaderCell>
                        <Table.HeaderCell>CNIC NO!</Table.HeaderCell>
                        <Table.HeaderCell>Father CNIC NO!</Table.HeaderCell>
                        <Table.HeaderCell>Date Of Birth!</Table.HeaderCell>
                        <Table.HeaderCell>Phone No!</Table.HeaderCell>
                        <Table.HeaderCell>Father Phone No!</Table.HeaderCell>
                        <Table.HeaderCell>Address!</Table.HeaderCell>
                        <Table.HeaderCell>Which Class to Addmission?</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                    
                </Table.Header>
                
    <Table.Body>
    {APIData.map((data) => {
       return (
       
         <Table.Row>
            <Table.Cell>{data.firstName}</Table.Cell>
             <Table.Cell>{data.fatherName}</Table.Cell>
             <Table.Cell>{data.cnicNumber}</Table.Cell>
             <Table.Cell>{data.fcnicNumber}</Table.Cell>
             <Table.Cell>{data.dateBirth}</Table.Cell>
             <Table.Cell>{data.phonNumber}</Table.Cell>
             <Table.Cell>{data.fatherPhon}</Table.Cell>
             <Table.Cell>{data.address}</Table.Cell>
             <Table.Cell>{data.whichClass}</Table.Cell>
       
             
             <Link to='/update'>
                <Table.Cell> 
                    <Button onClick={() => setData(data)}>Update</Button><br />
                </Table.Cell>
            </Link>

            <Table.Cell>
            <Button onClick={() => onDelete(data.id)}>Delete</Button>
            </Table.Cell>
          </Table.Row>
     )})}
  </Table.Body>
  </Table>
  
 </div>
)
}
export default Read;
