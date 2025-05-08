import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

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

  // Inline styles based on provided variables
  const styles = {
    infoIcon: {
      cursor: 'pointer',
      fontStyle: 'italic',
      color: '#00FFAA', // --color-accent-1
      fontSize: '14px',
      marginLeft: '4px',
      transition: 'color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)', // --transition-quick
    },
    infoIconHover: {
      color: '#3D7DFF', // --color-accent-2
    },
    modalBackdrop: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(5, 5, 5, 0.5)', // --color-black-1 with opacity
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      opacity: isModalOpen ? 1 : 0,
      transition: 'opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1)', // --transition-smooth
    },
    modalContent: {
      backgroundColor: '#1E1E1E', // --color-black-3
      padding: '16px', // --space-sm
      borderRadius: '12px', // --radius-md
      maxWidth: '500px',
      width: '90%',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.25)', // --shadow-dark
      position: 'relative',
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif", // --font-base
    },
    modalTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '16px', // --space-sm
      color: '#FFFFFF', // --color-white-1
    },
    modalText: {
      fontSize: '14px',
      color: '#F0F0F0', // --color-white-2
      lineHeight: 1.5,
      marginBottom: '16px', // --space-sm
    },
    closeButton: {
      position: 'absolute',
      top: '8px', // --space-xs
      right: '8px', // --space-xs
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '24px',
      height: '24px',
      borderRadius: '8px', // --radius-sm
      transition: 'background-color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)', // --transition-quick
    },
    closeButtonHover: {
      backgroundColor: 'rgba(0, 255, 170, 0.2)', // --shadow-accent
    },
    closeIcon: {
      color: '#FFFFFF', // --color-white-1
      width: '16px',
      height: '16px',
    },
    closeIconHover: {
      color: '#00FFAA', // --color-accent-1
    },
  };

  return (
    <>
      <span
        style={styles.infoIcon}
        onClick={toggleModal}
        onMouseOver={(e) =>
          (e.currentTarget.style.color = styles.infoIconHover.color)
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.color = styles.infoIcon.color)
        }
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
              style={styles.closeButton}
              onClick={closeModal}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.closeButtonHover.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.closeButton.backgroundColor)
              }
              aria-label="Close modal"
            >
              <X
                style={styles.closeIcon}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = styles.closeIconHover.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = styles.closeIcon.color)
                }
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoIcon;