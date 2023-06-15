import axios from 'axios';
import { useQueries } from 'react-query';
import { DEFAULT_LIMIT, POKEMON_LIST_MAX_LENGTH } from '../../constants';

function usePokemonKoreanNames() {
  const koreanNamesList = [];

  for (let i = 0; i < POKEMON_LIST_MAX_LENGTH; i++) {
    const urls = [];

    for (let j = DEFAULT_LIMIT * i; j < DEFAULT_LIMIT * (i + 1); j++) {
      if (i >= POKEMON_LIST_MAX_LENGTH - 1 && j >= 10) break;

      const url = `https://pokeapi.co/api/v2/pokemon-species/${j + 1}`;
      urls.push(url);
    }

    const requests = urls?.map((url, idx) => ({
      queryKey: `name-${i}-${idx}`,
      queryFn: () => axios.get(url),
    }));

    const results = useQueries(requests);
    const koreanNames = results.map(({ data }) => data?.data.names[2].name);
    koreanNamesList.push(koreanNames);
  }

  return { koreanNamesList };
}

export default usePokemonKoreanNames;
