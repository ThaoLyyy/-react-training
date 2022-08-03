import React from "react";
import styled from "styled-components";

/**
 * const StyledCard = styled.tag(h1,h2,div,span,strong.a,p,section,article...)``
 * CSS-in-JS:
 */
const StyledCard = styled.div`
  /* background-color: red; */
  position: relative;
  /* width: 400px; */
  margin: 0 auto;
  margin-bottom: 100px;
`;
const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 10px;
`;
const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit; /**ke thua cha gan no */
`;

const CardContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  width: calc(100% - 100px);
  /* width: 100%; */
  bottom: 0;
  background-color: #ccc;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
`;

const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

const UserName = styled.span`
  font-weight: 300;
  font-size: 16px;
  /* color: #333; */
  color: ${props => props.theme.orange};;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  /* color: black; */
  color: ${props => props.theme.colors.blue};;
`;

const CardAmount = styled.span`
  font-style: 18px;
  font-weight: bold;
  background: linear-gradient(
    86.88deg,
    #7d6aff 1.38%,
    #ffb86c 64.35%,
    #fc2872 119.91%
  );
  color: transparent; /**trong suot */
  -webkit-background-clip: text;
  background-clip: text;
`;
const CardMeta = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const Card = () => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg
          src="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="img"
        />
      </CardImage>
      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvatar
              src="https://media.istockphoto.com/photos/building-in-shape-of-smiling-emoji-blinking-with-tongue-out-in-the-picture-id1313673729?b=1&k=20&m=1313673729&s=170667a&w=0&h=aBpn5bulde_vDXtxvStasOPjXrk2FN951R6q3jXBRmo="
              alt="avatar"
            />
            <UserName>@thaolyy</UserName>
          </CardUser>
          <CardMeta>
            <img src="/icon-heart.svg" alt="heart" />
            <span>234</span>
          </CardMeta>
        </CardTop>
        <CardFooter>
          <CardTitle>Cosmic Perspective</CardTitle>
          <CardAmount>12,000 PSL</CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
