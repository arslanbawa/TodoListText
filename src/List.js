import React from 'react'
import {useState ,useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import ShowDetail from './ShowDetail'
  import styles from './List.module.css'
  import Search from './Search'

 const List= () => {
    const [user, setUser] = useState ([])
    useEffect(() =>{
        fetch('https://thronesapi.com/api/v2/Characters')
        .then((response) => response.json())
        .then((json)=>{
            setUser(json)
            console.log(user);
        })
    },[])

    return (
        <div className={styles.user_wrapper}>
            {/* <Search /> */}
            <h1>Users</h1>
              <table>
                  <tbody>
                          <tr>
                              <td>FIRST NAME</td>
                              <td>LAST NAME</td>
                          </tr>
                      
                  {
                user?.map((item) =>{
                            return(
                                <tr>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>
                                <Link to={`/ShowDetail?id=${item.id}`}>ShowDetails</Link>
                                </td>
                            </tr>
                            )
                })
            }
                  </tbody>
              </table>
        </div>
    )
}
export default List;
