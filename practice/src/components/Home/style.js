import styled from "styled-components";

const Section = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: auto;
  /* width: 1200px;
  max-width: 100%;
  margin: 0 auto; */
  min-height: 100vh;
`;
const Container = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
`;

const Wrapper = styled.div`
  /* width: 1024px;
  margin: auto; */
  width: 100%; 
   display: flex; 
`;

const Title = styled.h1`
  /* text-align: center;
  font-family: "Inter";
  text-transform: uppercase;
  padding-bottom: 20px; */
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
const Line = styled.div`
  /* width: 900px;
  margin-top: -5px; */
`;

const TitleList = styled.h2`
  font-size: 24px;
  margin-left: 350px;
  /* margin-top: 110px; */
  font-family: "Roboto";
  text-transform: capitalize;
  color: #ee4fa4b3;
  font-weight: 600;
`;
const AddNew = styled.p`
  /* font-size: 16px;
  font-family: "Inter";
  margin-bottom: 2px;
  position: relative;
  font-size: 16px; */
  font-family: "Roboto";
  padding: 6px 12px 6px 10px;
  background-color: #78e2f3;
  color: #fff;
  border-radius: 10px;
  margin-left: 1230px;
  vertical-align: middle;
  display: flex;
  gap: 5px;
`;

export {
  Section,
  Wrapper,
  Title,
  Container,
  Row,
  TitleList,
  ListItem,
  Line,
  AddNew,
};
