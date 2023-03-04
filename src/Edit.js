import React,{useState, useEffect} from 'react';
import './Edit.css';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";


const Edit = () => {
  const [user, setuser] = useState({
    fname: "",
    username: "",
    email: "",
    phone: "",
    website: "",
   
  });
  const navigate = useNavigate();
  const {id} = useParams();
  

  const {fname, username, email, phone, website} = user;

  const onInputChange = e =>{
  setuser({...user,[e.target.name]: e.target.value})
};

useEffect(() =>{
  loaduser()
},[])

const onSubmit = async e =>{
  e.preventDefault();
  await axios.put(`https://6398047777359127a04507f3.mockapi.io/crudyoutube/${id}`, user);
  navigate('/');
};

const loaduser = async () =>{
  const result = await axios.get(`https://6398047777359127a04507f3.mockapi.io/crudyoutube/${id}`);
  setuser(result.data);
};
  return (
    <>
      <h1>Edit User</h1>

       
        <form onSubmit={e => onSubmit(e)}>
        <input type="text" className='cname' name='fname' value={fname} onChange={e => onInputChange(e)} />
       
        <input type="text" className='cname' name='username' value={username} onChange={e => onInputChange(e)} />

        <input type="Email" className='cname' name='email' value={email} onChange={e => onInputChange(e)} />

        <input type="number" className='cname' name='phone' value={phone} onChange={e => onInputChange(e)} />

        <input type="website" className='cname' name='website' value={website} onChange={e => onInputChange(e)} />
        <button> Update</button>
        </form>
     
   </>
  )
};

export default Edit;
