import React, { useState, useEffect } from 'react';
import MemberItem from './MemberItem';
import Pagination from './Pagination';

const MemberList = ({ members, filters, sortOrder }) => {
  const [paginatedMembers, setPaginatedMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    // Apply filters and sorting
    const filteredMembers = members.filter(member => 
      member.characterRole === filters.characterRole &&
      member.guildRole === filters.guildRole &&
      member.level >= filters.levelMin &&
      member.level <= filters.levelMax &&
      member.mainArchetype === filters.mainArchetype &&
      member.grandmasterProfession === filters.grandmasterProfession
    );

    const sortedMembers = filteredMembers.sort((a, b) => {
      if (sortOrder === 'ilvl_desc') {
        return b.ilvl - a.ilvl;
      } else {
        return a.ilvl - b.ilvl;
      }
    });

    // Pagination
    setPaginatedMembers(sortedMembers.slice((currentPage - 1) * 10, currentPage * 10));
  }, [members, filters, sortOrder, currentPage]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Guild Role</th>
            <th>Ilvl</th>
            {/* Add other columns */}
          </tr>
        </thead>
        <tbody>
          {paginatedMembers.map((member) => (
            <MemberItem key={member.id} member={member} />
          ))}
        </tbody>
      </table>
      <Pagination totalItems={paginatedMembers.length} currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
};

export default MemberList;
