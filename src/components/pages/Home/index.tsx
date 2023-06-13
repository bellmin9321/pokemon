import { styled } from 'styled-components';
import PokemonList from '../../PokemonList';
import SearchInput from '../../SearchInput';

function Home() {
  return (
    <HomeContainer>
      <SearchInput />
      <PokemonList />
    </HomeContainer>
  );
}

const HomeContainer = styled.main`
  min-width: 1000px;
`;

export default Home;
