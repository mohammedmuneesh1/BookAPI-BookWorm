import React, { useState } from 'react';
import { Modal } from '../Body/modal';

export const Trail = () => {
  // State to manage the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button  className="bg-red-400" onClick={toggleModal}>
        Toggle modal
      </button>
    </>
  );
};