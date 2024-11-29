import React, { useState } from 'react';
import './FilterBar.css';

const FilterBar = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    characterRole: '',
    guildRole: '',
    levelMin: '',
    levelMax: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleFilter = () => {
    onFilter(filters);
  };

  return (
    <div className="filter-bar">
      <input
        type="text"
        name="characterRole"
        placeholder="Character Role"
        value={filters.characterRole}
        onChange={handleChange}
      />
      <input
        type="text"
        name="guildRole"
        placeholder="Guild Role"
        value={filters.guildRole}
        onChange={handleChange}
      />
      <input
        type="number"
        name="levelMin"
        placeholder="Min Level"
        value={filters.levelMin}
        onChange={handleChange}
      />
      <input
        type="number"
        name="levelMax"
        placeholder="Max Level"
        value={filters.levelMax}
        onChange={handleChange}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default FilterBar;
