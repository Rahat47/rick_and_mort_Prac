import Character from '../types/Character';
import { useQuery, QueryFunction } from 'react-query';
import CharacterCard from './CharacterCard';
import { useState } from 'react';

const Characters = () => {
    const [page, setPage] = useState(1);

    const fetchCharacters: QueryFunction<Character[]> = async ({
        queryKey,
    }) => {
        const response = await fetch(
            `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
        );
        const data = await response.json();
        return data.results;
    };

    const { data, isLoading, isError, isPreviousData } = useQuery(
        ['characters', page],
        fetchCharacters,
        {
            keepPreviousData: true,
        }
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error</div>;
    }

    return (
        <div className='characters'>
            {data?.map(character => (
                <CharacterCard key={character.id} character={character} />
            ))}
            <div>
                <button
                    disabled={page === 1}
                    onClick={() => setPage(prev => prev - 1)}
                >
                    Previous
                </button>
                <button
                    disabled={isPreviousData && data && data.length < 20}
                    onClick={() => setPage(prev => prev + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Characters;
