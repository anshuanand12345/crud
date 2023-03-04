import axios, { Axios } from 'axios';
import React, { useState } from 'react';
import './App.css';
import { useNavigate } from "react-router-dom";


const Adduser = () => {
  
   const [fname, setfname] = useState("");
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [website, setwebsite] = useState("");

    const navigate = useNavigate();

  const header = {"Access-Control-Allow-Origin": "*"};
    
  const handleSubmit =(e) =>{
    e.preventDefault();
    console.log("clicked");
    axios.post(
        'https://6398047777359127a04507f3.mockapi.io/crudyoutube',
        {fname:fname, username:username, email:email, phone:phone, website:website,header}
    );
     navigate('/');
  };


    return (
        <>
            <div className='input'>
                <div className='line'>
                    <h1 className='headcount'> Add A User </h1>
                </div>

                <form >

                    <input type="text" className='fname' placeholder='Enter your Name' name='fname' value={fname} onChange={(e) => setfname(e.target.value)} />

                    <input type="text" className='fname' placeholder='Enter your Username' name='username' value={username} onChange={(e) => setusername(e.target.value)} />

                    <input type="Email" className='fname' placeholder='Enter your E-mail Id' name='email' value={email} onChange={(e) => setemail(e.target.value)} />

                    <input type="number" className='fname' placeholder='Enter your Phone No' name='phone' value={phone} onChange={(e) => setphone(e.target.value)} />

                    <input type="text" className='fname' placeholder='Enter your Website' name='website' value={website} onChange={(e) => setwebsite(e.target.value)} />

                    <button onClick={handleSubmit}> Add User </button>

                </form>
            </div>
        </>
    )
}

export default Adduser;