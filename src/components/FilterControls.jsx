const FilterControls = ({ filter, onFilterChange, onSearchChange }) => (
  <div className="flex justify-between container mx-auto max-w-7xl my-10">
    <div className="mb-4 flex gap-2">
      <select
        name="type"
        onChange={onFilterChange}
        className="border border-zinc-100 bg-zinc-900 text-white rounded-3xl py-2 px-3 mr-2"
      >
        <option value="status">Status</option>
        <option value="gender">Gender</option>
      </select>
      <select
        name="value"
        onChange={onFilterChange}
        className="border border-zinc-100 bg-zinc-900 text-white rounded-3xl py-2 px-3 mr-2"
      >
        <option value="">Select Filter</option>
        {filter.type === 'status' && (
          <>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </>
        )}
        {filter.type === 'gender' && (
          <>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="Unknown">Unknown</option>
          </>
        )}
      </select>
    </div>
    <div className="flex relative h-11 px-3 rounded-3xl border border-zinc-100 overflow-hidden items-center">
      <input
        type="search"
        placeholder="Search"
        onChange={onSearchChange}
        className="outline-none text-white bg-zinc-900 py-0"
      />
      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400"
        aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20">
        <path stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
      </svg>
    </div>
  </div>
);

export default FilterControls;