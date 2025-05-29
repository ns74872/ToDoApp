import React from 'react';

function FilterButtons({ setFilter, currentFilter }) {
  const filters = ['All', 'Active', 'Completed'];

  return (
    <div className="flex justify-center gap-4 mb-4">
      {filters.map(f => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded ${currentFilter === f ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;