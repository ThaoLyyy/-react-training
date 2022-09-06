import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  /* position: fixed;
  width: 100%;
  height: 100%;
  overflow: auto; */
  /* width: 1200px;
  max-width: 100%;
  margin: 0 auto; */
`;
const Container = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
const Row = styled.div`
  min-height: 100vh;
  width: 110%;
  position: relative;
`;

const Title = styled.h1`
  /* text-align: center;
  font-family: "Inter";
  text-transform: uppercase;
  padding-bottom: 20px; */
`;
const ListItem = styled.div`
  /* display: flex;
  flex-direction: column;
  width: 900px; */
`;
const Layout = styled.div`
  /* min-height: 100wh; */
`;

const TitleList = styled.h2`
    font-size: 25px;
    font-family: "Roboto";
    text-transform: capitalize;
    color: #6d7475;
    font-weight: 600;
    margin: 15px 0 0 35px;
`;

const AddNew = styled.p`
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
  Layout,
  AddNew,
};