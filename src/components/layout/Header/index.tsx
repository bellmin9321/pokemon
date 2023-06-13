import styled from 'styled-components';

function Header() {
  return (
    <HeaderContainer>
      <TitleBox>
        <Title href="/">Pokemon</Title>
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
  background-color: lightblue;
  color: white;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

const Title = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: x-large;
`;

export default Header;
