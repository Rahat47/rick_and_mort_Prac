import Character from '../types/Character';

type Props = {
    character: Character;
};

const CharacterCard = ({ character }: Props) => {
    return (
        <div className='card'>
            <img src={character.image} alt={character.name} />
            <div className='text-container'>
                <h3>
                    {character.name}
                    <p className='status'>
                        {character.status} - {character.species}
                    </p>
                    <p className='title'>Last seen on</p>
                    <p>{character.location.name}</p>
                </h3>
            </div>
        </div>
    );
};

export default CharacterCard;
