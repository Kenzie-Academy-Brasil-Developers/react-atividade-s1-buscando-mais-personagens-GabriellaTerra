import styled from "styled-components";

export const Card = styled.div`
  background-color: #84ffa3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 3px solid blue;
  border-radius: 5px;
  box-shadow: 16px -14px 10px 0px #00ff00;
`;

export const Title = styled.h3`
  color: blue;
`;

export const Photos = styled.img`
  border-radius: 8px;
  box-shadow: 0px 14px 5px 0px grey;
`;

export const Descriptions = styled.p`
  font-weight: 700;
`;
export const Alive = styled.p`
  color: green;
`;
