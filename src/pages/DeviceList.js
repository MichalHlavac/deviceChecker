import React,{useContext,useEffect} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {UserContext} from '../containers/UserContext';
import {DevicesContext} from '../containers/DevicesContext';
import Logout from '../containers/Logout';
import Add from '../containers/Add';
import Devices from '../containers/Devices';
import {Page} from '../components/styledPage';
import {Header} from '../components/styledHeader';
export default ()=>{
    const [user]=useContext(UserContext);
    const [devices, setDevices]=useContext(DevicesContext);
    useEffect(()=>{
        if(user){
        const fetchData = async()=>{
        const result = await axios('https://js-test-api.etnetera.cz/api/v1/phones',
            {headers:{'Accept': 'application/json',"Auth-Token":user.token}});
        setDevices(result.data)};
        fetchData();
        };
      }, [user,setDevices]);
    if (!user){
        return(
            <Redirect to="/"/>
        );}
    return(
    <Page>
        <Header>
            <h1>deviceChecker</h1>
            <nav>
                <Logout/>
                <Add/>
            </nav>
        </Header>
        <Devices/>
        </Page> 
    );
}