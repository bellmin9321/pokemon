import React, { Fragment, Suspense, memo } from 'react';
import {
  findPokemonDBImage,
  useGetEvolutionChain,
} from '../../lib/hooks/usePokemon';
import useEvolutionChain from '../../lib/hooks/useEvolutionChain';
import { styled } from 'styled-components';
import { EvolutionInfo, SpeciesInfoTypes } from '../../types';
import Loading from '../Loading';

interface EvolutionChainProps {
  species: SpeciesInfoTypes;
}

function EvolutionChain({ species }: EvolutionChainProps) {
  const { data: evolutionInfo, isLoading } = useGetEvolutionChain(
    species?.evolution_chain?.url as string,
  );

  const { evoChain } = useEvolutionChain(
    evolutionInfo as EvolutionInfo,
    species?.evolves_from_species,
  );

  if (isLoading) return <Loading />;

  return (
    <EvolutionChainContainer>
      {evoChain.length ? (
        <Suspense fallback={<Loading />}>
          {evoChain?.map((evo, idx) => (
            <Fragment key={idx}>
              {!species?.evolves_from_species && !idx && (
                <>
                  <div>
                    <EvolutionImg
                      src={findPokemonDBImage(
                        evolutionInfo?.species.name as string,
                      )}
                      alt="pokemon image"
                    />
                    <EvolutionName>{evolutionInfo?.species.name}</EvolutionName>
                  </div>
                  <Arrow>{'➡'}</Arrow>
                </>
              )}
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
        </Suspense>
      ) : (
        <h2>진화 단계 없음</h2>
      )}
    </EvolutionChainContainer>
  );
}

const EvolutionChainContainer = styled.div`
  display: flex;
  height: 35%;
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

export default memo(EvolutionChain);
