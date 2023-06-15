import { Suspense, memo } from 'react';

import { Link } from 'react-router-dom';
import Loading from '../Loading';
import { styled } from 'styled-components';

type PokemonCardProps = {
  id: number;
  pokemonName: string;
  pokemonImgUrl?: string;
};

function PokemonCard({ id, pokemonName, pokemonImgUrl }: PokemonCardProps) {
  return (
    <SLink to={`/pokemon/${id + 1}`} state={{ name: pokemonName }}>
      <CardContainer>
        <CardHeader>
          <h3>{`#${id + 1} ${pokemonName}`}</h3>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<Loading />}>
            <PokemonImg src={pokemonImgUrl} alt={`${pokemonName} image`} />
          </Suspense>
        </CardContent>
      </CardContainer>
    </SLink>
  );
}

const SLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  border-radius: 10px;
  width: 40vh;
  padding-bottom: 10px;

  &:hover {
    opacity: 0.7;
  }
`;

const CardHeader = styled.div``;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PokemonImg = styled.img`
  width: 120px;
  height: 120px;
`;

export default memo(PokemonCard);
