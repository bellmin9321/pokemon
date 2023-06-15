import {
  findPokemonDBImage,
  useGetPokemon,
} from '../../../lib/hooks/usePokemon';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import Loading from '../../Loading';

import { capitalize } from '../../../lib/utils';
import SpeciesInfo from './SpeciesInfo';
import { useSetRecoilState } from 'recoil';
import { inputSearchValue } from '../../../lib/recoil';
import Seo from '../../Seo';

function PokemonDetails() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const setSearchNumber = useSetRecoilState(inputSearchValue);

  const { data: pokemon, isLoading } = useGetPokemon(String(id));

  return (
    <PokemonDetailsContainer>
      <Seo
        title="Pokemon Detailed Page"
        description="You can see about pokemon detail"
        keywords="detail"
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PokemonImageBox>
            {!pokemon ? (
              <h1>검색한 포켓몬이 없습니다</h1>
            ) : (
              <>
                <CardHeader>
                  <CardNumber>{`#${pokemon?.id}`}</CardNumber>
                  <CardTitle>{state?.name || pokemon?.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <PokemonImg
                    src={findPokemonDBImage(pokemon?.name)}
                    alt="pokemon image"
                  />
                  <TypesBox>
                    {pokemon.types.map(({ type }, idx) => (
                      <div key={idx}>{capitalize(type?.name)}</div>
                    ))}
                  </TypesBox>
                  <SpecBox>
                    <div>
                      <p>Height</p>
                      <span>{pokemon?.height}m</span>
                    </div>
                    <Seperator />
                    <div>
                      <p>Weight</p>
                      <span>{pokemon?.weight}kg</span>
                    </div>
                  </SpecBox>
                </CardContent>
              </>
            )}
          </PokemonImageBox>
          <SpeciesInfo pokemonData={pokemon} />
        </>
      )}

      <BackBtn
        onClick={() => {
          setSearchNumber('');
          navigate(-1);
        }}
      >
        BACK
      </BackBtn>
    </PokemonDetailsContainer>
  );
}

const PokemonDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 80vh;
  margin-top: 10vh;
`;

const PokemonImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 15rem;
  border: 1px solid lightgray;
  padding: 30px;
  border-radius: 10px;
`;

const CardHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CardNumber = styled.h1`
  margin-right: 10px;
`;

const CardTitle = styled.h1``;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const TypesBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  > div {
    border: 1px solid lightgray;
    background-color: black;
    border-radius: 15px;
    padding: 6px 10px;
    margin: 10px;
    color: white;
    font-weight: 500;
  }
`;

const SpecBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;

    > span {
      font-size: 30px;
      font-weight: bold;
    }
  }
`;

const Seperator = styled.div`
  width: 1px;
  margin: 0 20px;
  height: 80%;
  background-color: lightgray;
`;

const PokemonImg = styled.img`
  width: 200px;
  height: 200px;
`;

const BackBtn = styled.button`
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 80px;
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

export default PokemonDetails;
