import React, { useState } from 'react';

const CharacterCard = ({ character }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className=" rounded-3xl overflow-hidden relative border border-zinc-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className="items-center justify-center text-lg bg-green-500 h-full p-7">
          <p className="text-center mb-6 mt-9 text-3xl">{character.name}</p>
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
            className="w-full h-96 object-cover"
          />
          <div className="absolute z-50 top-0 left-0 bg-zinc-900 text-white text-xl p-4 rounded-br-2xl">
            / {character.id}
          </div>
          <h3 className="text-center my-3 text-3xl text-zinc-100 p-2">{character.name}</h3>
        </>
      )}
    </div>
  );
};

export default CharacterCard;
