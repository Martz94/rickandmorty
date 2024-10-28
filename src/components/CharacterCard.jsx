import React, { useState } from 'react';

const CharacterCard = ({ character }) => {
  // Estado para controlar si el ratón está sobre la tarjeta
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mx-auto w-full h-auto flex flex-wrap justify-center">
  <div
    className="w-80 h-96 flex flex-col rounded-3xl overflow-hidden relative" 
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    {isHovered ? (
      <div className="flex-grow w-full h-full items-center justify-center text-lg bg-green-500 px-7 py-10">
        <p className="text-center mb-6 mt-5 text-3xl">{character.name}</p>
        <p><strong>Status:</strong> {character.status}</p>
        <p><strong>Species:</strong> {character.species}</p>
        <p><strong>Type:</strong> {character.type || 'Unknown'}</p>
        <p><strong>Gender:</strong> {character.gender}</p>
        <p><strong>Origin:</strong> {character.origin.name}</p>
        <p><strong>Location:</strong> {character.location.name}</p>
        <div className="absolute z-50 top-0 left-0 bg-zinc-900 text-white text-xl p-4 rounded-br-2xl">
          / {character.id}
        </div>
      </div>
    ) : (
      <>
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-2/3 object-cover"
          loading="lazy"
        />
        <div className="absolute z-20 top-0 left-0 bg-zinc-900 text-white text-xl p-4 rounded-br-2xl">
          / {character.id}
        </div>
        <div className="border rounded-b-3xl border-zinc-100  flex-grow">
          <h3 className="text-center my-3 text-3xl text-zinc-100 p-2">{character.name}</h3>
        </div>
      </>
    )}
  </div>
</div>

  );
};

export default CharacterCard;
