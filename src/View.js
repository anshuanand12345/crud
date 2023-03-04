import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const View = () => {
    const [info, setInfo] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        fetchtable();
    }, []);

    const fetchtable = async () => {
        const result = await axios.get(`https://6398047777359127a04507f3.mockapi.io/crudyoutube`);
        let index = window.location.search.split('?')[1] - 1;
        setInfo(result.data[index]);
    }

    function handleSubmit(e) {
        e.preventDefault();
        navigate('/');
    }


    return (
        <>
            <h1 className='headcount'> Details Page</h1>
            {info ?
                <div className='viewdata'>
                    <form onSubmit={handleSubmit}>
                        <input type="text" className='fname' value={info.fname} />

                        <input type="text" className='fname' value={info.username} />

                        <input type="Email" className='fname' value={info.email} />

                        <input type="number" className='fname' value={info.phone} />

                         <button type="submit" className='back'>Back</button>
                    </form>
                </div>
                : null}
        </>
    )
}

export default View;