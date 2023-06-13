import PokemonCard from '../PokemonCard';
import { styled } from 'styled-components';
import Loading from '../Loading';
import useInfiniteQueryWithScroll from '../../lib/hooks/useInfiniteQueryWithScroll';
import { DEFAULT_LIMIT } from '../../constants';
import useScroll from '../../lib/hooks/useScroll';

interface Pokemon {
  name: string;
  url: string;
}

function PokemonList() {
  const { showTopBtn, scrollToTop } = useScroll();
  const { data, isFetching, ObservationComponent } = useInfiniteQueryWithScroll(
    { limit: DEFAULT_LIMIT },
  );

  return (
    <PokemonListWrapper>
      {data?.map((page) =>
        page?.pokemonList.map((pokemon: Pokemon, index: number) => (
          <PokemonCard
            key={index}
            pokemonName={pokemon.name}
            pokemonImgUrl={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
          />
        )),
      )}
      <ObservationComponent />
      {isFetching && <Loading />}
      {showTopBtn && <ScrollToTopBtn onClick={scrollToTop}>TOP</ScrollToTopBtn>}
    </PokemonListWrapper>
  );
}

const PokemonListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ScrollToTopBtn = styled.button`
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: #222222;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 20%;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    opacity: 0.7;
  }
`;

export default PokemonList;
