import { ReactElement, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';

import axios from 'axios';
import { DEFAULT_LIST_QUANTITY } from '../../constants';
import { UseInfiniteQueryWithScrollReturnTypes } from '../../types';

interface UseInfiniteProps {
  limit: number;
}

export default function useInfiniteQueryWithScroll({
  limit,
}: UseInfiniteProps): UseInfiniteQueryWithScrollReturnTypes {
  const getPokemonList = async ({ pageParam = 0 }) => {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${pageParam}`,
    );

    const nextPage =
      data.results.length >= DEFAULT_LIST_QUANTITY ? pageParam + 20 : undefined;

    return {
      pokemonList: data.results,
      nextPage,
      isLast: !nextPage,
    };
  };

  const { isLoading, data, error, isFetching, fetchNextPage } =
    useInfiniteQuery(['pokemonList'], getPokemonList, {
      getNextPageParam: (lastPage) => {
        return lastPage.nextPage;
      },
    });

  const ObservationComponent = (): ReactElement => {
    const [ref, inView] = useInView();

    useEffect(() => {
      if (!data) return;

      const pageLastIdx = data.pages.length - 1;
      const isLast = data?.pages[pageLastIdx].isLast;

      if (!isLast && inView) fetchNextPage();
    }, [inView]);

    return <div ref={ref} />;
  };

  return {
    data: data?.pages,
    error,
    isLoading,
    isFetching,
    ObservationComponent,
  };
}
