import React from 'react';

const SortControls = ({ onChange }) => {
  const handleSortChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div className="sort-controls">
      <select name="sortKey" onChange={handleSortChange}>
        <option value="ilvl">Item Level</option>
      </select>
      <select name="sortOrder" onChange={handleSortChange}>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
    </div>
  );
};

export default SortControls;
