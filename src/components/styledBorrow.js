import styled from "styled-components";

const Borrow = styled.button`
  width: 97%;
  border: none;
  padding: 10px;
  color: white;
  font-size: 16px;
  position: absolute;
  bottom: 5px;
  left: 5px;
  &&.borrowed {
    background-color: gray;
    color: white;
  }
  &&.availible {
    background-color: orangered;
    color: white;
  }
`;
export { Borrow };
