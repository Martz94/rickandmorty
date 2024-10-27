import React, { useState, useEffect } from 'react';
import FilterControls from '../components/FilterControls';
import CharacterCard from '../components/CharacterCard';
import WelcomeSection from '../components/WelcomeSection';
import MainSection from '../components/MainSection';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';

const CARDS_PER_PAGE = 6;

function Home() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState({ type: 'status', value: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results);
    };
    fetchCharacters();
  }, []);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredCharacters = characters.filter(character => {
    const matchesName = character.name.toLowerCase().includes(searchTerm);
    const matchesFilterValue = !filter.value || (filter.type === 'status' ? character.status === filter.value : character.gender === filter.value);
    return matchesName && matchesFilterValue;
  });

  const totalPages = Math.ceil(filteredCharacters.length / CARDS_PER_PAGE);
  const paginatedCharacters = filteredCharacters.slice(
    (currentPage - 1) * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="bg-zinc-900 p-5">
        <WelcomeSection />
        <MainSection />
        <FilterControls
          filter={filter}
          onFilterChange={handleFilterChange}
          onSearchChange={handleSearchChange}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-28 max-w-7xl mx-auto">
          {paginatedCharacters.map(character => (
            <CharacterCard
              key={character.id}
              character={character} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      <Footer />
    </>
  );
}

export default Home;

