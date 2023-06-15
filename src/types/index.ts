import { ReactElement } from 'react';

export interface ChildrenProp {
  children: React.ReactNode;
}

export interface PokemonType {
  slot: number;
  type: {
    name: TypeName;
    url: string;
  };
}

export interface Species {
  name: string;
  url: string;
}

export interface PokemonData {
  id: number;
  name: string;
  types: PokemonType[];
  stats: PokemonStats[];
  abilities: PokemonAbility[];
  weight: number;
  height: number;
  species: Species;
}

interface PokemonListTypes {
  pokemonList: Species[];
  nextPage?: number;
  isLast: boolean;
}

export interface UseInfiniteQueryWithScrollReturnTypes {
  data: PokemonListTypes[] | undefined;
  error: string | undefined | unknown;
  isLoading: boolean;
  isFetching: boolean;
  ObservationComponent: () => ReactElement;
}

interface Ability {
  name: string;
  url: string;
}

interface PokemonAbility {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

interface color {
  name: string;
  url: string;
}

interface language {
  name: string;
  url: string;
}

export interface flavor_text_entries {
  flavor_text: string;
  language: language;
  version: {
    name: string;
    url: string;
  };
}

export interface DescriptionType {
  flavor_text: string;
  language: { name: string; url: string };
  version: { name: string; url: string };
}

export interface SpeciesInfoTypes {
  capture_rate: number;
  base_happiness: number;
  color: color;
  evolves_from_species: {
    name: string;
    url: string;
  } | null;
  evolution_chain: {
    url: string;
  };
  names: {
    name: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  flavor_text_entries: flavor_text_entries[];
  form_descriptions: DescriptionType[];
}
interface evolution_details {
  min_level: number;
  trigger: { name: string };
}

export interface EvolutionInfo {
  evolution_details: evolution_details[];
  evolves_to: EvolutionInfo[];
  species: {
    name: string;
    url: string;
  };
}

type StatName =
  | 'hp'
  | 'attack'
  | 'defense'
  | 'special-attack'
  | 'special-defense'
  | 'speed';

type TypeName =
  | 'normal'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground';

interface Stat {
  name: StatName;
  url: string;
}

interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: Stat;
}
