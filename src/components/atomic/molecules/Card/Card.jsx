import React from "react";
import styled from "styled-components";
import ArrowRightSVG from "../../../../assets/right-arrow.png";

const StyledCardIcon = styled("img")`
width: 50px;
height: 50px;
align-self: center;
`;
const StyledCard = styled("div")`
  width: 320px;
  height: 200px;
  border-radius: 24px;
  transition: all 0.2s;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.02);
  background-color: var(--ens-card-bg);
  cursor: pointer;
  &:hover {
  transform: translateY(-2px);
`;
const StyledCardInner = styled("div")`
  padding: 24px 22px;
  display: grid;
  gap: 5px;
`;
const StyledCardTitle = styled("div")`
  font-size: 1.2rem;
  font-weight: 650;
  color: rgba(0, 0, 0, 0.75) !important;
  letter-spacing: -0.02em;
  line-height: 2.5rem;
  text-align: justify;
  color: var(--ens-card-title);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  `;

const StyledCardDescription = styled("div")`
  font-size: 16px;
  color: #717171;
  display: -webkit-box;
  display: -moz-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const StyledCardImage = styled("img")`
  margin-left: auto;
  display: block;
`;

function Card({icon, title, description, link }) {
  return (
<StyledCard>
      <StyledCardInner>
        <StyledCardIcon src={icon} alt=""></StyledCardIcon>
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledCardDescription>{description}</StyledCardDescription>
        <StyledCardImage src={ArrowRightSVG} alt="" />
      </StyledCardInner>
    </StyledCard>
  );
}

export default Card;
