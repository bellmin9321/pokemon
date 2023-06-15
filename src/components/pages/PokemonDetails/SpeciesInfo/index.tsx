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
import { capitalize } from '../../../../lib/utils';

interface SpeciesInfoProps {
  pokemonData?: PokemonData;
}

function SpeciesInfo({ pokemonData }: SpeciesInfoProps) {
  const { data: speciyInfo } = useGetSpeciesInfo(
    pokemonData?.species.url as string,
  );

  const koreanDescription = useCallback(
    (descs: flavor_text_entries[]) =>
      descs
        ?.filter((text) => text.language.name === 'ko')
        .reduce((a, b) => (a += `${b.flavor_text}\n`), ''),
    [speciyInfo],
  );

  return (
    <SpeciesInfoContainer>
      <DescriptionBox>
        <h2>포켓몬 설명</h2>
        <Suspense fallback={<Loading />}>
          <span>
            {koreanDescription(
              speciyInfo?.flavor_text_entries as flavor_text_entries[],
            )}
          </span>
        </Suspense>
      </DescriptionBox>
      <FeaturesBox>
        <div>
          <h3>능력</h3>
          <AbilityRow>
            {pokemonData?.abilities.map((abilityObj, idx) => (
              <span key={idx}>{capitalize(abilityObj.ability.name)}</span>
            ))}
          </AbilityRow>
        </div>
        <div>
          <h3>잡을 확률</h3>
          <div>{speciyInfo?.capture_rate}%</div>
        </div>
        <div>
          <h3>행복도</h3>
          <div>{speciyInfo?.base_happiness}%</div>
        </div>
        <div>
          <h3>색상</h3>
          <div>{capitalize(speciyInfo?.color?.name as string)}</div>
        </div>
      </FeaturesBox>
      <h2>진화 단계</h2>
      <Suspense fallback={<Loading />}>
        <EvolutionChain species={speciyInfo as SpeciesInfoTypes} />
      </Suspense>
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

const FeaturesBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 25%;
  width: 85%;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
      font-size: 20px;
      font-weight: 500;
      color: #3e3e3e;
    }
  }
`;

const AbilityRow = styled.div`
  display: flex;
  flex-direction: row;

  > span {
    padding: 5px 10px;
    border: 1px solid lightgray;
    border-radius: 15px;
    font-weight: 500;
    margin-right: 10px;
    font-size: 13px;
  }
`;

export default SpeciesInfo;
