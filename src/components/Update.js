import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Update() {
    const [firstName, setFirstName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [cnicNumber, setCnicNumber] = useState('');
    const [fcnicNumber, setFcnicNumber] = useState('');
    const [dateBirth, setDateBirth] = useState('');
    const [phonNumber, setPhonNumber] = useState('');
    const [fatherPhon, setFatherPhon] = useState('');
    const [address, setAdress] = useState('');
    const [whichClass, setWich] = useState('');

    const [id, setID] = useState(null);

        useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setFatherName(localStorage.getItem('Father Name'));
        setCnicNumber(localStorage.getItem('CNIC NO'));
        setFcnicNumber(localStorage.getItem('Father CNIC NO'));
        setDateBirth(localStorage.getItem('Date Of Birth'));
        setPhonNumber(localStorage.getItem('Phone No'));
        setFatherPhon(localStorage.getItem('Father CNIC NO'));
        setAdress(localStorage.getItem('Address'));
        setWich(localStorage.getItem('Which Class to Addmission?'));
}, []);

const updateAPIData = () => {
    axios.put(`https://638f48cc9cbdb0dbe3226b06.mockapi.io/Admetion/${id}`, {
        firstName,
        fatherName,
        cnicNumber,
        fcnicNumber,
        dateBirth,
        phonNumber,
        fatherPhon,
        address,
        whichClass
	})
}
    return (
        <div className='main'>
          <Form className="create-form">
           <Form.Field>
        
              <label>First Name</label><br />
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field> 
            <label>Father Name</label><br />
            <input placeholder='Father  Name' onChange={(e) => setFatherName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>CNIC NO</label><br />
            <input placeholder='CNIC NO' onChange={(e) => setCnicNumber(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Father CNIC NO</label><br />
            <input placeholder='Father CNIC NO' onChange={(e) => setFcnicNumber(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Date Of Birth</label><br />
            <input type="date" placeholder='Date Of Birth' onChange={(e) => setDateBirth(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Phone No</label><br />
            <input type="number" placeholder='Phone No' onChange={(e) => setPhonNumber(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Father Phone No</label><br />
            <input type="number"  placeholder='Father Phone No' onChange={(e) => setFatherPhon(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Address</label><br />
            <input placeholder='Address' onChange={(e) => setAdress(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Which Class to Addmission?</label><br />
            <input placeholder='Which Class to Addmission?' onChange={(e) => setWich(e.target.value)}/>
            <select >
                <option><span className='font'>متوسطہ</span></option>
                <option>اولی</option>
                <option>ثانیہ</option>
                <option>ثالثۃ</option>
                <option>رابعہ</option>
                <option>خامسہ</option>
                <option>سادسہ</option>
                <option>سابعہ</option>
                <option>عالمیہ</option>
            </select>
        </Form.Field>
               
            
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}
