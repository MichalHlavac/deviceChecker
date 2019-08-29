import styled from 'styled-components';

const DevicesSection=styled.section `
    grid-column:2/12;
    grid-row:2/3;
nav{
    display:inline-block;
    width:100%;
    padding:10px;
    margin:auto ;
    select{
        width:150px;
        margin:10px;
        padding:5px;
        font-size:16px;
    }
    label{
        color:gray;
        margin:0;
    }
}
.devices{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    max-width:1650px;
    margin-left:auto;
    margin-right:auto;  
    section{
         position:relative;
        box-sizing:border-box;
        overflow:hidden;
        background-color:white;
        text-align:center;
        width:400px;
        height:500px;
        overflow:hidden;
        margin:5px;
        padding:5px;
        
        img{
            position:relative;
            height:300px;
            max-width:100%;
            }
    }
}
`
export {DevicesSection};