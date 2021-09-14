import React, {useEffect, useState} from 'react';
import {
    useLocation
  } from "react-router-dom";
  import styles from './ShowDetail.module.css'

function useQuery(){
    return new URLSearchParams(useLocation().search);
}
const ShowDetail = () =>{
    let query = useQuery();
    const [item, setItem] = useState('');
    useEffect(() =>{
        fetch("https://thronesapi.com/api/v2/Characters/" +query.get("id"))
        .then((response) => response.json())
        .then((results) => setItem(results));
    },[]) 
    // console.log(item)

    return(
        <div className={styles.user_detail_wrapper} >
            <h1>User Detail</h1>
            <div >
            <p>First Name: {item.firstName}</p>
            <p>Last Name: {item.lastName}</p>
            <p>Full Name: {item.fullName}</p>
            
            </div>
            
            
        </div>
    );
}
export default ShowDetail ;