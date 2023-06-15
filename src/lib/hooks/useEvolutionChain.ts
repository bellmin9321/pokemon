import { useEffect, useState } from 'react';
import { EvolutionInfo } from '../../types';

type EvoType = {
  name: string;
  url: string;
} | null;

function useEvolutionChain(info: EvolutionInfo, prevEvo?: EvoType) {
  const [evoChain, setEvoChain] = useState<EvoType[]>([]);

  let evoData = info;

  useEffect(() => {
    const EvoTypes = [];
    if (
      prevEvo &&
      evoData?.evolves_to[0] &&
      prevEvo?.name !== evoData?.evolves_to[0].species?.name
    )
      EvoTypes.push(prevEvo);

    while (evoData?.evolves_to?.length) {
      if (!evoData) return;
      const evoDetails = evoData['evolves_to'][0];

      EvoTypes.push({
        name: evoDetails?.species?.name,
        url: evoDetails?.species?.url,
      });

      evoData = evoDetails;
    }

    setEvoChain(EvoTypes);
  }, [info, prevEvo]);

  return { evoChain };
}

export default useEvolutionChain;
