import styled from 'styled-components';
import SearchInput from '../../SearchInput';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <HeaderContainer>
      <TitleBox to="/">
        <PokeballImg
          src={`${process.env.PUBLIC_URL}/favicon.ico`}
          alt="home_pokeball"
        />
        <Title>Pokemon</Title>
      </TitleBox>
      <InputBox>
        <SearchInput />
      </InputBox>
      <GithubText href="https://github.com/bellmin9321/pokemon" target="_blank">
        Github
      </GithubText>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  height: 10vh;
  width: 100%;
  background-color: #e72e2e;
  color: white;
  z-index: 10;
`;

const TitleBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  text-decoration: none;
  cursor: pointer;
  z-index: 20;
`;

const PokeballImg = styled.img`
  width: 30px;
  margin-right: 10px;
`;

const Title = styled.span`
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: x-large;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GithubText = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  margin-right: 30px;
  z-index: 20;
  font-size: 20px;

  &:hover {
    color: yellow;
  }
`;

export default Header;
