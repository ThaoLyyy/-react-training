import styled from "styled-components";

const Section = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: auto;
  /* width: 1200px;
  max-width: 100%;
  margin: 0 auto; */
  min-height: 100vh;
`;
const Wrapper = styled.div`
  /* width: 100%;
  height: 100%;
  margin: auto; */
`;
const Content = styled.div`
  /* border-radius: 5px;
  padding: 25px;
  margin-top: 10px; */ 
`;

const Row = styled.div`
  /* display: flex;
  flex-direction: row; */
`;
const ListItem = styled.div`
  /* display: flex;
  flex-direction: column;
  width: 900px; */
`;
const Line = styled.h2`
  font-size: 24px;
  margin-left: 350px;
  margin-top: 110px;
  font-family: "Roboto";
  text-transform: capitalize;
  color: #ee4fa4b3;
  font-weight: 600;
`;
const TitleList = styled.h2`
  font-size: 24px;
  margin-left: 350px;
  margin-top: 110px;
  font-family: "Roboto";
  text-transform: capitalize;
  color: #ee4fa4b3;
  font-weight: 600;
`;

export { Section,Content, Wrapper, Line, TitleList };
