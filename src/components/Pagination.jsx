const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center my-20 space-x-2">
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-lg ${currentPage === page ? 'bg-zinc-400 text-black' : ' text-zinc-400'}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
