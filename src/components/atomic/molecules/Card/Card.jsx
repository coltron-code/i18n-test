import React from "react";
import styled from "styled-components";
import ArrowRightSVG from "../../../../assets/right-arrow.png";

const StyledCard = styled("div")`
  width: 100%;
  min-width: 300px;
  border-radius: 24px;
  transition: all 0.2s;
  border: 1px solid rgba(0, 0, 0, 0.06);

  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.02);
  background-color: var(--ens-card-bg);

  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
  }
`;
const StyledCardInner = styled("div")`
  padding: 24px 22px;
  display: grid;
  gap: 5px;
`;
const StyledCardTitle = styled("div")`
  font-size: 24px;
  font-weight: 600;
  color: var(--ens-card-title);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const StyledCardDescription = styled("div")`
  font-size: 16px;
  color: #717171;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const StyledCardImage = styled("img")`
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
