import React, { Fragment } from 'react';
import {
  findPokemonDBImage,
  useGetEvolutionChain,
} from '../../../../lib/hooks/usePokemon';
import useEvolutionChain from '../../../../lib/hooks/useEvolutionChain';
import { styled } from 'styled-components';

interface EvolutionChainProps {
  specyData: {
    evolution_chain?: {
      url: string;
    };
    evolves_from_species?: {
      name: string;
      url: string;
    } | null;
  };
}

function EvolutionChain({ specyData }: EvolutionChainProps) {
  const { data: evolutionInfo } = useGetEvolutionChain(
    specyData?.evolution_chain?.url as string,
  );

  const { evoChain } = useEvolutionChain(
    evolutionInfo,
    specyData.evolves_from_species,
  );

  return (
    <EvolutionChainContainer>
      {evoChain?.map((evo, idx) => (
        <Fragment key={idx}>
          {!specyData.evolves_from_species && !idx && <Arrow>{'➡'}</Arrow>}
          <div>
            <EvolutionImg
              src={findPokemonDBImage(evo?.name as string)}
              alt="pokemon image"
            />
            <EvolutionName key={idx}>{evo?.name}</EvolutionName>
          </div>
          {idx < evoChain.length - 1 && <Arrow>{'➡'}</Arrow>}
        </Fragment>
      ))}
    </EvolutionChainContainer>
  );
}

const EvolutionChainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const EvolutionImg = styled.img`
  width: 100px;
  height: 100px;
`;

const EvolutionName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 17px;
`;

const Arrow = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

export default EvolutionChain;
