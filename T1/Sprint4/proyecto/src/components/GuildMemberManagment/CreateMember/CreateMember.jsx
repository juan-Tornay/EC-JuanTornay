import React, { useState } from 'react';
import { createGuildMember } from '../../../services/guildmembers_API'; // Import createGuildMember
import './CreateMember.css'; // Asegúrate de que esta ruta sea correcta

const CreateMember = ({ onMemberCreated }) => {
  const [formData, setFormData] = useState({
    id: '',
    username: '',
    level: '',
    ilvl: '',
    characterRole: '',
    guildRole: '',
    mainArchetype: '',
    secondaryArchetype: '',
    grandmasterProfessionOne: '',
    grandmasterProfessionTwo: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.id) newErrors.id = 'ID is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.level || isNaN(formData.level) || formData.level <= 0) newErrors.level = 'Level must be a positive number';
    if (!formData.ilvl || isNaN(formData.ilvl) || formData.ilvl <= 0) newErrors.ilvl = 'Item Level must be a positive number';
    // Add more validations as needed
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      console.log('Submitting form data:', formData);
      const newMember = await createGuildMember(formData);
      console.log('New member created:', newMember);
      onMemberCreated(newMember);
      alert('Member created successfully!');
      setFormData({
        id: '',
        username: '',
        level: '',
        ilvl: '',
        characterRole: '',
        guildRole: '',
        mainArchetype: '',
        secondaryArchetype: '',
        grandmasterProfessionOne: '',
        grandmasterProfessionTwo: ''
      });
      setErrors({});
    } catch (error) {
      console.error('Error creating member:', error);
      alert(`Error creating member: ${error.message}`);
    }
  };

  return (
    <form className="create-member-form" onSubmit={handleSubmit}>
      <div>
        <label>ID:</label>
        <input type="text" name="id" value={formData.id} onChange={handleInputChange} />
        {errors.id && <span>{errors.id}</span>}
      </div>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label>Level:</label>
        <input type="number" name="level" value={formData.level} onChange={handleInputChange} />
        {errors.level && <span>{errors.level}</span>}
      </div>
      <div>
        <label>Item Level:</label>
        <input type="number" name="ilvl" value={formData.ilvl} onChange={handleInputChange} />
        {errors.ilvl && <span>{errors.ilvl}</span>}
      </div>
      <div>
        <label>Character Role:</label>
        <select name="characterRole" value={formData.characterRole} onChange={handleInputChange}>
          <option value="">Select Role</option>
          <option value="DAMAGE">DAMAGE</option>
          <option value="TANK">TANK</option>
          <option value="HEALER">HEALER</option>
        </select>
      </div>
      <div>
        <label>Guild Role:</label>
        <select name="guildRole" value={formData.guildRole} onChange={handleInputChange}>
          <option value="">Select Role</option>
          <option value="MEMBER">MEMBER</option>
          <option value="OFFICER">OFFICER</option>
          <option value="LEADER">LEADER</option>
        </select>
      </div>
      <div>
        <label>Main Archetype:</label>
        <input type="text" name="mainArchetype" value={formData.mainArchetype} onChange={handleInputChange} />
      </div>
      <div>
        <label>Secondary Archetype:</label>
        <input type="text" name="secondaryArchetype" value={formData.secondaryArchetype} onChange={handleInputChange} />
      </div>
      <div>
        <label>Grandmaster Profession One:</label>
        <input type="text" name="grandmasterProfessionOne" value={formData.grandmasterProfessionOne} onChange={handleInputChange} />
      </div>
      <div>
        <label>Grandmaster Profession Two:</label>
        <input type="text" name="grandmasterProfessionTwo" value={formData.grandmasterProfessionTwo} onChange={handleInputChange} />
      </div>
      <button type="submit">Create Member</button>
    </form>
  );
};

export default CreateMember;