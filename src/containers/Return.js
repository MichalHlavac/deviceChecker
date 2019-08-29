import React,{useContext} from 'react';
import {UserContext} from './UserContext';
import {DevicesContext} from './DevicesContext';
import {Return} from '../components/styledReturn';
import axios from 'axios';

export default (props)=>{
    const device=props.device;
    const [devices,setDevices]=useContext(DevicesContext);
    const [user,setUser]=useContext(UserContext);
    const handleClick =()=>{
        axios.post(`https://js-test-api.etnetera.cz/api/v1/phones/${device.id}/return`,{},
        {headers:{'Accept':'application/json',"Auth-Token":user.token}})
        .then(
            axios.get('https://js-test-api.etnetera.cz/api/v1/phones',
            {headers:{'Accept': 'application/json',"Auth-Token":user.token}})
            .then (result=>setDevices(result.data))
        )
        .catch(error => {
            console.log(error.response)
        });
    };
    return(
        <Return onClick={handleClick}>VRÁTIT</Return>
    );
};