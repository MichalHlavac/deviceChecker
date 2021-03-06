import styled from "styled-components";

const AddForm = styled.form`
  grid-column: 1/13;
  grid-row: 3/4;
  box-shadow: 5px 10px #888888;
  text-align: left;
  background-color: white;
  padding: 40px 10px 10px 10px;
  width: 600px;
  max-width: 100%;
  margin: auto;
  input {
    display: block;
    width: 100%;
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid black;
    font-size: 16px;
  }
  button {
    width: 100%;
    border: none;
    padding: 10px;
    background-color: orangered;
    color: white;
    font-size: 16px;
  }
`;
export { AddForm };
