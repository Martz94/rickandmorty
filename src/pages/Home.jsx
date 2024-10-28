import React, { useState, useEffect, useMemo, useCallback } from 'react';
import FilterControls from '../components/FilterControls';
import CharacterCard from '../components/CharacterCard';
import WelcomeSection from '../components/WelcomeSection';
import MainSection from '../components/MainSection';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';
import { fetchApi } from '../api/fetchApi';

const CARDS_PER_PAGE = 6;

function Home() {
  // Estados para los datos y filtros
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState({ searchTerm: '', type: 'status', value: '' });
  const [currentPage, setCurrentPage] = useState(1);

  // Cargar personajes en el primer render
  useEffect(() => {
    const loadCharacters = async () => {
      const data = await fetchApi();
      setCharacters(data.results);
    };
    loadCharacters();
  }, []);

  // Maneja el cambio de filtros
  const handleFilterChange = useCallback((event) => {
    const { name, value } = event.target;
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
    setCurrentPage(1);  // Reinicia la paginación al aplicar filtros
  }, []);

  // Actualiza el término de búsqueda
  const handleSearchChange = useCallback((event) => {
    setFilters(prevFilters => ({ ...prevFilters, searchTerm: event.target.value }));
    setCurrentPage(1);  // Reinicia la paginación al buscar
  }, []);

  // Filtra personajes usando useMemo para mejorar el rendimiento
  const filteredCharacters = useMemo(() => {
    const { searchTerm, type, value } = filters;
    return characters.filter(character => {
      const matchesName = character.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilterValue = !value ||
        (type === 'status' ? character.status === value : character.gender === value);
      return matchesName && matchesFilterValue;
    });
  }, [characters, filters]);

  // Pagina los personajes filtrados
  const paginatedCharacters = useMemo(() => {
    const start = (currentPage - 1) * CARDS_PER_PAGE;
    return filteredCharacters.slice(start, start + CARDS_PER_PAGE);
  }, [filteredCharacters, currentPage]);

  const totalPages = Math.ceil(filteredCharacters.length / CARDS_PER_PAGE);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  return (
    <>
      <div className="bg-zinc-900 p-5">
        <WelcomeSection />
        <MainSection />

        <FilterControls
          filter={filters}
          onFilterChange={handleFilterChange}
          onSearchChange={handleSearchChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-28 max-w-7xl mx-auto">
          {paginatedCharacters.map(character => (
            <CharacterCard key={character.id} character={character} />
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



