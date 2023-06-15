import PokemonCard from '../PokemonCard';
import { styled } from 'styled-components';
import Loading from '../Loading';
import useInfiniteQueryWithScroll from '../../lib/hooks/useInfiniteQueryWithScroll';
import { DEFAULT_LIMIT, UNKNOWN } from '../../constants';
import useScroll from '../../lib/hooks/useScroll';
import usePokemonKoreanNames from '../../lib/hooks/usePokemonKoreanNames';
import { Species } from '../../types';
import { useRecoilValue } from 'recoil';
import { inputSearchValue } from '../../lib/recoil';
import { findPokemonDBImage, useGetPokemon } from '../../lib/hooks/usePokemon';
import useDebounce from '../../lib/hooks/useDebounce';

function PokemonList() {
  const searchNumber = useRecoilValue(inputSearchValue);
  const debouncedSearchNumber = useDebounce({
    value: searchNumber,
    delay: 500,
  });
  const { showTopBtn, scrollToTop } = useScroll();

  const { data, isLoading, isFetching, ObservationComponent } =
    useInfiniteQueryWithScroll({ limit: DEFAULT_LIMIT });
  const { koreanNamesList } = usePokemonKoreanNames();

  const { data: pokemon, isLoading: searchLoading } = useGetPokemon(
    debouncedSearchNumber,
  );

  return (
    <>
      {isLoading ? (
        <BlankWrapper>
          <Loading />
        </BlankWrapper>
      ) : (
        <PokemonListContainer>
          {debouncedSearchNumber ? (
            <SearchedPokemonCardWrapper>
              {searchLoading ? (
                <Loading />
              ) : (
                <>
                  {pokemon ? (
                    <PokemonCard
                      id={(pokemon?.id - 1) as number}
                      pokemonName={
                        koreanNamesList[parseInt(String(pokemon?.id / 20))][
                          (pokemon?.id % 20) - 1
                        ]
                      }
                      pokemonImgUrl={findPokemonDBImage(pokemon?.name)}
                    />
                  ) : (
                    <h1>검색하신 번호의 포켓몬이 존재하지 않습니다</h1>
                  )}
                </>
              )}
            </SearchedPokemonCardWrapper>
          ) : (
            <>
              {data?.map((page, idx) =>
                page?.pokemonList.map((pokemon: Species, index: number) => (
                  <PokemonCard
                    key={index}
                    id={idx * 20 + index}
                    pokemonName={koreanNamesList[idx][index] || UNKNOWN}
                    pokemonImgUrl={findPokemonDBImage(pokemon?.name)}
                  />
                )),
              )}
              <ObservationComponent />
              {isFetching && <Loading />}
              {showTopBtn && (
                <ScrollToTopBtn onClick={scrollToTop}>TOP</ScrollToTopBtn>
              )}
            </>
          )}
        </PokemonListContainer>
      )}
    </>
  );
}

const PokemonListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 15vh 0;
`;

const SearchedPokemonCardWrapper = styled.div`
  height: 60vh;
`;

const BlankWrapper = styled.div`
  height: 90vh;
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
  border-radius: 10%;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    opacity: 0.7;
  }
`;

export default PokemonList;
