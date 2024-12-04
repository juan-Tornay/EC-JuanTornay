import React, { useState } from 'react';

const FilterBar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    characterRole: 'DAMAGE',
    guildRole: 'MEMBER',
    levelMin: 50,
    levelMax: 60,
    mainArchetype: 'MAGE',
    grandmasterProfession: 'ALCHEMY',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => {
      const updatedFilters = { ...prev, [name]: value };
      onFilterChange(updatedFilters); // Pass filters to parent (GuildMemberManagement)
      return updatedFilters;
    });
  };

  return (
    <div>
      <select name="characterRole" value={filters.characterRole} onChange={handleFilterChange}>
        <option value="DAMAGE">DAMAGE</option>
        <option value="TANK">TANK</option>
        <option value="HEALER">HEALER</option>
      </select>
      <select name="guildRole" value={filters.guildRole} onChange={handleFilterChange}>
        <option value="MEMBER">MEMBER</option>
        <option value="ADMIN">ADMIN</option>
        <option value="GERENTE">GERENTE</option>
      </select>
      <input
        type="number"
        name="levelMin"
        value={filters.levelMin}
        onChange={handleFilterChange}
        placeholder="Min Level"
      />
      <input
        type="number"
        name="levelMax"
        value={filters.levelMax}
        onChange={handleFilterChange}
        placeholder="Max Level"
      />
      <select name="mainArchetype" value={filters.mainArchetype} onChange={handleFilterChange}>
        <option value="MAGE">MAGE</option>
        <option value="WARRIOR">WARRIOR</option>
        <option value="ASSASSIN">ASSASSIN</option>
      </select>
      <select name="grandmasterProfession" value={filters.grandmasterProfession} onChange={handleFilterChange}>
        <option value="ALCHEMY">ALCHEMY</option>
        <option value="BLACKSMITHING">BLACKSMITHING</option>
      </select>
    </div>
  );
};

export default FilterBar;
