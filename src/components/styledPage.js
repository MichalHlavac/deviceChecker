import styled from "styled-components";

const Page = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 8.333vw);
  grid-auto-rows: minmax(5vw, auto);
  width: 100%;
  height: 100%;
  padding: auto;
`;
export { Page };
