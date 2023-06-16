import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer>
      <div>@2023 Bellmin. All Rights Reserved.&ensp;</div>
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
  font-size: 18px;
  font-weight: 500;
`;

export default Footer;
