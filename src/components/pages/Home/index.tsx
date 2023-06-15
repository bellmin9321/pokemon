import { styled } from 'styled-components';
import PokemonList from '../../PokemonList';

function Home() {
  return (
    <HomeContainer>
      <PokemonList />
    </HomeContainer>
  );
}

const HomeContainer = styled.main`
  min-width: 1000px;
`;

export default Home;
