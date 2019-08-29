import styled from 'styled-components';

const Header=styled.header`
    grid-column:1/13;
    grid-row:1/2;
    background-color:orangered;
    padding:30px 0;
    display:grid;
    grid-template-columns:repeat(12,8.333vw);
    h1{
        grid-column:1/4;
        display:inline;
        color:white;
        font-size:30px;
        padding-left:30px;
    }
    nav{
        grid-column:4/13;
        text-align:right;
        margin:auto 0;
        .logout{
            display:inline ;
            label{
                color:white;
                }
            button{
                margin:0 20px;
                padding:10px;
                font-size:16px;
                font-weight:bold;
                }
        }
        .add{
            button{
                margin:0 20px;
                padding:10px;
                font-size:16px;
                font-weight:bold;
                }
        }
        .devList{
            button{
                margin:0 20px;
                padding:10px;
                font-size:16px;
                font-weight:bold;
                } 
        }
}
`
export {Header};