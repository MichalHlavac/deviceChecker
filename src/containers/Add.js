import React,{useContext} from 'react';
import {UserContext} from '../containers/UserContext';
import {Link} from 'react-router-dom';

export default ()=>{
    const [user,setUser]=useContext(UserContext);
    
    if(user.type==='admin'){
        return(
            <Link className="add" to='/add-device'>
              <button>PŘIDAT ZAŘÍZENÍ</button>
            </Link>)}
    return(null);
    
};