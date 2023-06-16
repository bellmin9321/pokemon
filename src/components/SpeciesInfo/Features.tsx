import React from 'react';
import { styled } from 'styled-components';
import { capitalize } from '../../lib/utils';
import { PokemonData, SpeciesInfoTypes } from '../../types';

interface FeaturesProps {
  pokemonData: PokemonData;
  speciesInfo: SpeciesInfoTypes;
}

function Features({ pokemonData, speciesInfo }: FeaturesProps) {
  return (
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
        <div>{speciesInfo?.capture_rate}%</div>
      </div>
      <div>
        <h3>행복도</h3>
        <div>{speciesInfo?.base_happiness}%</div>
      </div>
      <div>
        <h3>색상</h3>
        <div>{capitalize(speciesInfo?.color?.name as string)}</div>
      </div>
    </FeaturesBox>
  );
}

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

export default Features;
