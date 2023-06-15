import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer>
      <div>@2023 Bellmin. All Rights Reserved.&ensp;</div>
      <GithubText href="https://github.com/bellmin9321/pokemon" target="_blank">
        Github
      </GithubText>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  width: 100%;
  background-color: #e72e2e;
  color: white;
`;

const GithubText = styled.a`
  color: yellow;
  text-decoration: none;
  font-weight: bold;
`;

export default Footer;
