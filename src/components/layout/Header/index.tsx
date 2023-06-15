import styled from 'styled-components';

function Header() {
  return (
    <HeaderContainer>
      <TitleBox href="/">
        <NotFoundImg src={`${process.env.PUBLIC_URL}/favicon.ico`} />
        <Title>Pokemon</Title>
      </TitleBox>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10vh;
  width: 100%;
  background-color: #e72e2e;
  color: white;
`;

const TitleBox = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  text-decoration: none;
`;

const NotFoundImg = styled.img`
  width: 30px;
  margin-right: 10px;
`;

const Title = styled.span`
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: x-large;
`;

export default Header;
