import React,{useContext} from 'react';
import {Redirect} from 'react-router-dom';
import {UserContext} from '../containers/UserContext';
import LoginForm from '../containers/LoginForm';
import {Page} from '../components/styledPage';
import {Header} from '../components/styledHeader';

export default ()=>{
    const [user,setUser]=useContext(UserContext);
    if (!user){
        return(
            <Page>
                <Header>
                  <h1>deviceChecker</h1>
                </Header>
                    <LoginForm/>
            </Page>
        );}
    return(<Redirect to="/devicelist"/> );
}
   
   
   
   
   
   
