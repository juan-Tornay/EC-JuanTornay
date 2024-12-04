import React from 'react';

const BulkActions = ({ selectedMembers, onBulkAction }) => {
  const handleChangeGuildRole = () => {
    onBulkAction('GERENTE', selectedMembers);
  };

  return (
    <div>
      <button onClick={handleChangeGuildRole}>Change Guild Role to GERENTE</button>
    </div>
  );
};

export default BulkActions;
