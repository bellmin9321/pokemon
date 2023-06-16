import { styled } from 'styled-components';
import PokemonList from '../PokemonList';
import Seo from './Seo';

function Home() {
  return (
    <HomeContainer>
      <Seo
        title="Pokemon Home Page"
        description="Search your favorite pokemon"
        keywords="home"
      />
      <PokemonList />
    </HomeContainer>
  );
}

const HomeContainer = styled.main`
  min-width: 1000px;
`;

export default Home;
