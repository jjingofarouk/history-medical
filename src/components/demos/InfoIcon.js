import React, { useState, useEffect } from 'react';

const InfoIcon = ({ clinicalInfo }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = (e) => {
    e.stopPropagation();
    setModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Handle clicks on the backdrop to close the modal
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // Inline styles
  const styles = {
    infoIcon: {
      cursor: 'pointer',
      fontStyle: 'italic',
      color: '#007bff',
      fontSize: '14px',
      marginLeft: '4px',
    },
    modalBackdrop: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '500px',
      width: '90%',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      position: 'relative',
    },
    modalTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '12px',
      color: '#333',
    },
    modalText: {
      fontSize: '14px',
      color: '#333',
      lineHeight: 1.5,
      marginBottom: '16px',
    },
    modalCloseButton: {
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
    },
    modalCloseButtonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <>
      <span
        style={styles.infoIcon}
        onClick={toggleModal}
        role="button"
        aria-label={`Clinical relevance of field`}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && toggleModal(e)}
      >
        i
      </span>
      {isModalOpen && (
        <div
          className="modal-backdrop"
          style={styles.modalBackdrop}
          onClick={handleBackdropClick}
        >
          <div
            className="modal-content"
            style={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={styles.modalTitle}>Clinical Relevance</h3>
            <p style={styles.modalText}>{clinicalInfo}</p>
            <button
              style={styles.modalCloseButton}
              onClick={closeModal}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.modalCloseButtonHover.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.modalCloseButton.backgroundColor)
              }
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoIcon;
