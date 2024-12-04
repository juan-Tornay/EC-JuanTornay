import React from 'react';

const SortControls = ({ onSortChange }) => {
  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div>
      <button value="ilvl_asc" onClick={handleSortChange}>Sort by Ilvl Ascending</button>
      <button value="ilvl_desc" onClick={handleSortChange}>Sort by Ilvl Descending</button>
    </div>
  );
};

export default SortControls;
