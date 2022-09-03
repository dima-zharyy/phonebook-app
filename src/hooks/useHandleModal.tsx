import { useState } from 'react';

export const useHandleModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [editName, setEditName] = useState('');
  const [editNumber, setEditNumber] = useState('');
  const [editId, setEditId] = useState('');

  const handleOpenModal = (id, name, number) => {
    setEditName(name);
    setEditNumber(number);
    setEditId(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return {
    showModal,
    editName,
    editId,
    editNumber,
    handleOpenModal,
    handleCloseModal,
  };
};
