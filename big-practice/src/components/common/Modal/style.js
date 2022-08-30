// // import styled from "styled-components";

// // const ModalWrapper = styled.div`
// //   background-color: rgba(0, 0, 0, 0.5);
// //   position: fixed;
// //     top: 0;
// //     left: 0;
// //     z-index: 1040;
// //     width: 100vw;
// //     height: 130vh;
// //   /* display: none; */
// // `;
// // const Errors = styled.p`
// //   color: red;
// //   text-align: center;
// //   line-height: 8px;
// // `;
// // const ModalUser = styled.div`
// //   position: absolute;
// //   width: 450px;
// //   height: 600px;
// //   background: #ffafaf;
// //   font-family: "Roboto";
// //   z-index: 39;
// //   border-radius: 10px;
// //   left: 55%;
// //   top: 45%;
// //   transform: translate(-50%, -50%);
// //   line-height: 18px;
// //   /* padding: 10px; */
// // `;
// // const Error = styled.p`
// //   color: red;
// //   text-align: center;
// //   line-height: 8px;
// // `;
// // const Title = styled.p`
// //   text-align: center;
// //   font-weight: 600;
// //   font-size: 40px;
// //   text-transform: capitalize;
// // `;
// // const FormSubmit = styled.form`
// //   margin-left: 60px;
// // `;
// // const Label = styled.p`
// //   font-size: 16px;
// //   font-weight: 500;
// // `;
// // const InputUser = styled.input`
// //   width: 323px;
// //   height: 30px;
// //   border-radius: 5px;
// //   border: none;
// // `;
// // const BtnWrapper = styled.div`
// //   display: flex;
// //   justify-content: space-evenly;
// //   margin-right: 50px;
// //   margin-top: 50px;
// // `;
// // const Button = styled.button`
// //   cursor: pointer;
// //   width: 100px;
// //   height: 40px;
// //   border: none;
// //   font-family: "Roboto";
// //   font-size: 16px;
// //   border-radius: 10px;
// //   background-color: ${(props) => (props.save ? "#78E2F3" : "#C6C5CC")};
// // `;
// // export {
// //   ModalWrapper,
// //   ModalUser,
// //   Errors,
// //   Title,
// //   FormSubmit,
// //   Label,
// //   InputUser,
// //   Error,
// //   BtnWrapper,
// //   Button,
// // };


// import styled from "styled-components";

// const ListItem = styled.div`
//   width: 1024px;
//   /* height: auto; */
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: space-evenly;
//   margin-left: 20px;
//   margin-top: 40px;
// `;
// const Item = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 450px;
//   margin-bottom: 30px;
//   background: #ffdede;
//   border: 1px solid #fff;
//   padding: 15px;
//   border-radius: 10px;
//   flex: 0.2 1;
// `;
// const ImageWrapper = styled.div`
//   display: flex;
//   flex-direction: column; ;
// `;
// const ImageItem = styled.img`
//   width: 165px;
//   height: 165px;
//   object-fit: fill;
//   padding: 15px;
// `;
// const InforItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   line-height: 50px;
//   width: 270px;
//   line-height: 50px;
// `;

// const DetailInfor = styled.p`
//   font-size: 16px;
//   font-weight: 600;
//   text-transform: capitalize;
// `;

// const Icon = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
// `;
// const FontAwesomeIcon = styled.button`
//   font-size: 25px;
//   border: none;
//   margin-top: 10px;
//   cursor: pointer;
// `;
// export {
//   ListItem,
//   Item,
//   ImageWrapper,
//   ImageItem,
//   InforItem,
//   DetailInfor,
//   Icon,
//   FontAwesomeIcon,
// };


// // import styled from "styled-components";

// // const ListItem = styled.div`
// //   width: 1024px;
// //   /* height: auto; */
// //   display: flex;
// //   flex-flow: row wrap;
// //   justify-content: space-evenly;
// //   margin-left: 20px;
// //   margin-top: 40px;
// // `;
// // const Item = styled.div`
// //   display: flex;
// //   flex-direction: row;
// //   width: 450px;
// //   margin-bottom: 30px;
// //   background: #ffdede;
// //   border: 1px solid #fff;
// //   padding: 15px;
// //   border-radius: 10px;
// //   flex: 0.2 1;
// // `;
// // const ImageWrapper = styled.div`
// //   display: flex;
// //   flex-direction: column; ;
// // `;
// // const ImageItem = styled.img`
// //   width: 165px;
// //   height: 165px;
// //   object-fit: fill;
// //   padding: 15px;
// // `;
// // const InforItem = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   line-height: 50px;
// //   width: 270px;
// //   line-height: 50px;
// // `;

// // const DetailInfor = styled.p`
// //   font-size: 16px;
// //   font-weight: 600;
// //   text-transform: capitalize;
// // `;

// // const Icon = styled.div`
// //   display: flex;
// //   flex-direction: row;
// //   justify-content: space-around;
// // `;
// // const FontAwesomeIcon = styled.button`
// //   font-size: 25px;
// //   border: none;
// //   margin-top: 10px;
// //   cursor: pointer;
// // `;
// // export {
// //   ListItem,
// //   Item,
// //   ImageWrapper,
// //   ImageItem,
// //   InforItem,
// //   DetailInfor,
// //   Icon,
// //   FontAwesomeIcon,
// // };


import styled from "styled-components";

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 130vh;
  /* display: none; */
`;
const Errors = styled.p`
  color: red;
  text-align: center;
  line-height: 8px;
`;
const ModalUser = styled.div`
  position: absolute;
  width: 450px;
  height: 600px;
  background: #ffafaf;
  font-family: "Roboto";
  z-index: 39;
  border-radius: 10px;
  left: 55%;
  top: 45%;
  transform: translate(-50%, -50%);
  line-height: 18px;
  /* padding: 10px; */
`;
const Error = styled.p`
  color: yellow;
  text-align: center;
  line-height: 8px;
`;
const Title = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 40px;
  text-transform: capitalize;
  line-height: 2;
`;
const FormSubmit = styled.form`
  margin-left: 60px;
  line-height: 40px;
`;
const Label = styled.p`
  font-size: 16px;
  /* font-weight: 500; */
  line-height: 40px;
`;
const InputUser = styled.input`
  width: 323px;
  height: 30px;
  border-radius: 5px;
  border: none;
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-right: 50px;
  margin-top: 50px;
`;
const Button = styled.button`
  cursor: pointer;
  width: 100px;
  height: 40px;
  border: none;
  font-size: 16px;
  font-family: "Roboto";
  border-radius: 10px;
  background-color: ${(props) => (props.save ? "#78E2F3" : "#CFC5C5")};
`;
export {
  ModalWrapper,
  ModalUser,
  Errors,
  Title,
  FormSubmit,
  Label,
  InputUser,
  Error,
  BtnWrapper,
  Button,
};
