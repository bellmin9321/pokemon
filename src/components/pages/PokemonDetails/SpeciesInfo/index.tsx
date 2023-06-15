/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Suspense, useCallback } from 'react';
import { styled } from 'styled-components';
import Loading from '../../../Loading';
import {
  PokemonData,
  SpeciesInfoTypes,
  flavor_text_entries,
} from '../../../../types';
import { useGetSpeciesInfo } from '../../../../lib/hooks/usePokemon';
import EvolutionChain from '../EvolutionChain';
import Features from '../Features';

interface SpeciesInfoProps {
  pokemonData?: PokemonData;
}

function SpeciesInfo({ pokemonData }: SpeciesInfoProps) {
  const { data: speciesInfo } = useGetSpeciesInfo(
    pokemonData?.species.url as string,
  );

  const koreanDescription = useCallback(
    (descs: flavor_text_entries[]) =>
      descs
        ?.filter((text) => text.language.name === 'ko')
        .reduce((a, b) => (a += `${b.flavor_text}\n`), ''),
    [speciesInfo],
  );

  return (
    <SpeciesInfoContainer>
      <DescriptionBox>
        <h2>포켓몬 설명</h2>
        <Suspense fallback={<Loading />}>
          <span>
            {koreanDescription(
              speciesInfo?.flavor_text_entries as flavor_text_entries[],
            )}
          </span>
        </Suspense>
      </DescriptionBox>
      <Features pokemonData={pokemonData!} speciesInfo={speciesInfo!} />
      <h2>진화 단계</h2>
      <EvolutionChain species={speciesInfo as SpeciesInfoTypes} />
    </SpeciesInfoContainer>
  );
}

const SpeciesInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 50rem;
  padding: 30px;
`;

const DescriptionBox = styled.div`
  > span {
    font-size: 15px;
  }
`;

export default SpeciesInfo;
