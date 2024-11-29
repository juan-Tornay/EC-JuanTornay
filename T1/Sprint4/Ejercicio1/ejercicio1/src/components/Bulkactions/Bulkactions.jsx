import React from 'react';
import './BulkActions.css';

const BulkActions = ({ selectedMembers, setSelectedMembers }) => {
  const handleBulkDelete = () => {
    if (selectedMembers.length === 0) {
      alert('No members selected!');
      return;
    }

    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${selectedMembers.length} members?`
    );

    if (confirmDelete) {
      // Simula una eliminación en masa
      alert(`Deleted ${selectedMembers.length} members.`);
      setSelectedMembers([]); // Limpia la selección
    }
  };

  return (
    <div className="bulk-actions">
      <button
        onClick={handleBulkDelete}
        disabled={selectedMembers.length === 0}
      >
        Delete Selected
      </button>
      <span>{selectedMembers.length} selected</span>
    </div>
  );
};

export default BulkActions;
