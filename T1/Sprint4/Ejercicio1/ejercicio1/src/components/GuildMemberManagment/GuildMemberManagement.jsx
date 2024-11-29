import React, { useState, useEffect } from 'react';
import './GuildMemberManagement.css';
import FilterBar from '../FilterBar/FilterBar';
import MemberList from '../MemberList/MemberList';

import MemberDetailsModal from '../MemberDetailsModal/MemberDetailsModal';
import MemberEditModal from '../MemberEditModal/MemberEditModal';

const GuildMemberManagement = () => {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [editModalData, setEditModalData] = useState(null);
  const [detailsModalData, setDetailsModalData] = useState(null);

  // Fetch members from API
  useEffect(() => {
    fetch('http://localhost:3000/api/members')
      .then(response => response.json())
      .then(data => {
        setMembers(data);
        setFilteredMembers(data);
      })
      .catch(error => console.error('Error fetching members:', error));
  }, []);

  // Filter members based on criteria
  const handleFilter = (filters) => {
    const filtered = members.filter(member => {
      // Add filtering logic here
      return true; // Placeholder
    });
    setFilteredMembers(filtered);
  };

  // Handle selection of members
  const handleSelectMember = (id) => {
    setSelectedMembers(prev => {
      if (prev.includes(id)) {
        return prev.filter(memberId => memberId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Render the component
  return (
    <div className="guild-member-management">
      <FilterBar onFilter={handleFilter} />
      <BulkActions
        selectedMembers={selectedMembers}
        setSelectedMembers={setSelectedMembers}
      />
      <MemberList
        members={filteredMembers}
        onSelectMember={handleSelectMember}
        setEditModalData={setEditModalData}
        setDetailsModalData={setDetailsModalData}
      />
      {editModalData && (
        <MemberEditModal
          memberData={editModalData}
          closeModal={() => setEditModalData(null)}
        />
      )}
      {detailsModalData && (
        <MemberDetailsModal
          memberData={detailsModalData}
          closeModal={() => setDetailsModalData(null)}
        />
      )}
    </div>
  );
};

export default GuildMemberManagement;
