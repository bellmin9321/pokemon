import { EvolutionInfo, PokemonData, SpeciesInfoTypes } from '../../types';
import { useQuery } from 'react-query';
import axios from 'axios';

export const useGetPokemon = (id: string) => {
  return useQuery<PokemonData>({
    queryKey: ['pokemon', id],
    queryFn: async () => {
      try {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`,
        );

        return data;
      } catch (error) {
        new Error(`${error}`);
      }
    },
    select: (data) => ({
      id: data.id,
      name: data.name,
      types: data.types,
      stats: data.stats,
      height: data.height,
      weight: data.weight,
      abilities: data.abilities,
      species: data.species,
    }),
  });
};

export const findPokemonDBImage = (pokemonName: string) => {
  return `https://img.pokemondb.net/artwork/large/${pokemonName}.jpg`;
};

export const useGetSpeciesInfo = (url: string) => {
  return useQuery<SpeciesInfoTypes>({
    queryKey: ['species', url],
    queryFn: async () => {
      try {
        const { data } = await axios.get(url);

        return data;
      } catch (error) {
        new Error(`${error}`);
      }
    },
    select: (data) =>
      ({
        capture_rate: data.capture_rate,
        base_happiness: data.base_happiness,
        evolves_from_species: data.evolves_from_species,
        evolution_chain: data.evolution_chain,
        color: data.color,
        flavor_text_entries: data.flavor_text_entries,
        form_descriptions: data.form_descriptions,
        names: data.names,
      } || {}),
  });
};

export const useGetEvolutionChain = (url: string) => {
  return useQuery<EvolutionInfo>({
    queryKey: ['evoltution_chain', url],
    queryFn: async () => {
      try {
        const { data } = await axios.get(url);

        return data.chain;
      } catch (error) {
        new Error(`${error}`);
      }
    },
    select: (data) =>
      ({
        evolution_details: data.evolution_details,
        evolves_to: data.evolves_to,
        species: data.species,
      } || {}),
  });
};
