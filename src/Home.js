import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './App.css';

const Home = () => {

    useEffect(() => {
        loadusers();
    }, []);


    const[users, setusers] = useState([]);

  
   const loadusers = async () => {
       const result = await axios.get("https://6398047777359127a04507f3.mockapi.io/crudyoutube");
       setusers(result.data);
    };

    const deleteUser = async id =>{
        await axios.delete(`https://6398047777359127a04507f3.mockapi.io/crudyoutube/${id}`);
        loadusers();
    };
    


  return (
      <>
          <div className='home'>
              <div className='top'>
                  <h1> Home Page </h1>
              </div>
              <table className='tableform'>
                  <thead>
                      <tr className='tabletop'>
                          <td>#</td>
                          <td>Name</td>
                          <td>UserName</td>
                          <td>Email Id</td>
                          <td>Phone</td>
                          <td>Action</td>
                      </tr>
                  </thead>
                  <tbody>
                      {users.map((user, index) => (
                          <tr className='tabledown' key={index}>
                              <td>{user.id}</td>
                              <td>{user.fname}</td>
                              <td>{user.username}</td>
                              <td>{user.email}</td>
                              <td>{user.phone}</td>
                              <td>
                                  <Link to={`/view?${user.id}`}><button className='views'>View</button></Link>
                                  <Link to={`/edit/${user.id}`}><button className='views'>Edit</button></Link>
                                  <button className='delete' onClick={()=> deleteUser(user.id)}>Delete</button>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </>
  )
}

export default Home;