import { useState } from "react";

type TUseHandleModal = {
  showModal: boolean;
  editName: string;
  editId: string;
  editNumber: string;
  handleOpenModal: (id: string, name: string, number: string) => void;
  handleCloseModal: () => void;
};

export const useHandleModal = (): TUseHandleModal => {
  const [showModal, setShowModal] = useState(false);
  const [editName, setEditName] = useState("");
  const [editNumber, setEditNumber] = useState("");
  const [editId, setEditId] = useState("");

  const handleOpenModal = (id: string, name: string, number: string) => {
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
