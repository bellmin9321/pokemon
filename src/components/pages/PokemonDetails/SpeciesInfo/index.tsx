import { Suspense } from 'react';
import { styled } from 'styled-components';
import Loading from '../../../Loading';
import { PokemonData } from '../../../../types';
import { useGetSpeciesInfo } from '../../../../lib/hooks/usePokemon';
import EvolutionChain from '../EvolutionChain';

interface SpeciesInfoProps {
  pokemonData?: PokemonData;
}

function SpeciesInfo({ pokemonData }: SpeciesInfoProps) {
  const { data: speciyInfo } = useGetSpeciesInfo(
    pokemonData?.species.url as string,
  );

  const koreanDescription = speciyInfo?.flavor_text_entries
    ?.filter((text) => text.language.name === 'ko')
    .reduce((a, b) => (a += `${b.flavor_text}\n`), '');

  return (
    <PokemonDescriptionContainer>
      <h2>포켓몬 설명</h2>
      <Suspense fallback={<Loading />}>{koreanDescription}</Suspense>
      <h2>진화 단계</h2>
      <Suspense fallback={<Loading />}>
        <EvolutionChain specyData={speciyInfo || {}} />
      </Suspense>
    </PokemonDescriptionContainer>
  );
}

const PokemonDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 50rem;
  padding: 30px;
`;

export default SpeciesInfo;
