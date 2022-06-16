import React from 'react';
import styled from 'styled-components';
import discordGrey from '../../assets/discordGrey.svg';
import discussGrey from '../../assets/discussGrey.svg';
import { ReactComponent as twitterGrey } from '../../assets/twitterGrey.svg';

const StyledFooter = styled('div')`    
  position: absolute;
  padding: 10px 10px 0px 10px;
  bottom: 0;
  width: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 20px 20px 0;

  & > a {
    margin-right: 10px;
  }
`;
function Footer() {
  return (
    <StyledFooter>
      <a href="https://twitter.com/ensdomains">
        <img
          src={twitterGrey}
          width="34"
          css={{ marginTop: '2px' }}
          alt="Twitter"
        />
      </a>
      <a href="https://discuss.ens.domains/">
        <img src={discussGrey} width="33" alt="Discuss" />
      </a>
      <a href="https://chat.ens.domains/">
        <img
          src={discordGrey}
          width="30"
          css={{ marginLeft: '4px' }}
          alt="Discord"
        />
      </a>
    </StyledFooter>
  );
}

export default Footer;
