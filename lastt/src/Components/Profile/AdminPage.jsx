import React, { useState } from 'react';
import Modal from 'react-modal';

// Sample initial personal information
const initialInfo = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  address: '123 Main Street',
};

// Admin component
const AdminPage = () => {
  const [personalInfo, setPersonalInfo] = useState(initialInfo);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editedInfo, setEditedInfo] = useState({});

  // Handle input change in the modal
  const handleInputChange = (e) => {
    setEditedInfo({ ...editedInfo, [e.target.name]: e.target.value });
  };

  // Handle submit in the modal
  const handleSubmit = (e) => {
    e.preventDefault();
    setPersonalInfo({ ...personalInfo, ...editedInfo });
    setModalIsOpen(false);
    setEditedInfo({});
  };

  return (
    <div>
      <h1>Admin Page</h1>

      <button onClick={() => setModalIsOpen(true)}>Edit Personal Info</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Edit Personal Info"
      >
        <h2>Edit Personal Info</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text" name="name" value={editedInfo.name || personalInfo.name} onChange={handleInputChange}/>
          </label>

          <label>
            Email:
            <input
              type="email" name="email" value={editedInfo.email || personalInfo.email} onChange={handleInputChange}/>
          </label>

          <label>
            Address:
            <input
              type="text"
              name="address"
              value={editedInfo.address || personalInfo.address}
              onChange={handleInputChange}
            />
          </label>

          <button type="submit">Save</button>
          <button onClick={() => setModalIsOpen(false)}>Cancel</button>
        </form>
      </Modal>

      <div>
        <h2>Personal Info</h2>
        <p>Name: {personalInfo.name}</p>
        <p>Email: {personalInfo.email}</p>
        <p>Address: {personalInfo.address}</p>
      </div>
    </div>
  );
};

export default AdminPage;