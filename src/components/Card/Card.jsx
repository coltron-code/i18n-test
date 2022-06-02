import React from 'react';
import styled from 'styled-components';
import ArrowRightSVG from '../../assets/right-arrow.png';

const StyledCard = styled('div')`
  width: 100%;
  border-radius: 24px;
  transition: all 0.2s;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.02);
  background-color: white;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
  }
`;
const StyledCardInner = styled('div')`
  padding: 24px 22px;
  display: grid;
  gap: 5px;import { Button } from "@ensdomains/thorin"


  /* background-color: red; */
`;
const StyledCardTitle = styled('div')`
  font-size: 24px;
`;
const StyledCardDescription = styled('div')`
  font-size: 16px;
`;
const StyledCardImage = styled('img')`
 margin-left: auto;
 display: block;
`;

function Card({ title, description, link }) {
  return (
    <StyledCard>
      <StyledCardInner>
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledCardDescription>{description}</StyledCardDescription>
        <StyledCardImage src={ArrowRightSVG} alt="" />
      </StyledCardInner>
    </StyledCard>
  );
}

export default Card;
