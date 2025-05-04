/* Root variables for modern pitch black and white card-based theme */
:root {
  --primary-black: #000000; /* Pure black for backgrounds */
  --secondary-black: #1C1C1C; /* Dark gray for card backgrounds */
  --primary-white: #FFFFFF; /* Crisp white for text */
  --accent-gray: #333333; /* Subtle gray for secondary elements */
  --shadow: rgba(0, 0, 0, 0.4); /* Deep shadow for card elevation */
  --border-radius: 16px; /* Smooth, futuristic card corners */
  --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); /* Smooth animations */
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; /* Modern font stack */
  --spacing-unit: 24px; /* Consistent spacing */
}

/* Global reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body styles */
body {
  background: var(--primary-black);
  color: var(--primary-white);
  font-family: var(--font-family);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  padding: var(--spacing-unit);
}

/* App container */
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-unit);
}

/* Header */
.app-header {
  font-size: 36px;
  font-weight: 700;
  color: var(--primary-white);
  text-align: center;
  margin-bottom: calc(var(--spacing-unit) * 2);
  letter-spacing: -1px;
  text-transform: uppercase;
}

/* Card grid for sections */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-unit);
  padding: var(--spacing-unit);
  perspective: 1000px; /* 3D effect for cards */
}

/* Section card */
.section-card {
  position: relative;
  background: var(--secondary-black);
  border-radius: var(--border-radius);
  padding: var(--spacing-unit);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 200px;
  cursor: pointer;
  transition: var(--transition);
  overflow: hidden;
  box-shadow: 0 8px 24px var(--shadow);
  transform: translateZ(0);
}

/* Background images for cards */
.section-card:nth-child(1) {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800');
  background-size: cover;
  background-position: center;
}
.section-card:nth-child(2) {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1576091160550-2173fdabe9f1?auto=format&fit=crop&w=800');
  background-size: cover;
  background-position: center;
}
.section-card:nth-child(3) {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1505751172876-fa1923c5ebd8?auto=format&fit=crop&w=800');
  background-size: cover;
  background-position: center;
}
.section-card:nth-child(4) {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800');
  background-size: cover;
  background-position: center;
}
.section-card:nth-child(5) {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=800');
  background-size: cover;
  background-position: center;
}
.section-card:nth-child(6) {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1445527812168-57f788836937?auto=format&fit=crop&w=800');
  background-size: cover;
  background-position: center;
}
.section-card:nth-child(7) {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800');
  background-size: cover;
  background-position: center;
}
.section-card:nth-child(8) {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1579165466949-318953a3d7fa?auto=format&fit=crop&w=800');
  background-size: cover;
  background-position: center;
}

/* Card hover and animation */
.section-card:hover {
  transform: translateY(-8px) rotateX(5deg) rotateY(5deg);
  box-shadow: 0 16px 32px var(--shadow);
}

/* Card icon and text */
.section-card svg {
  color: var(--primary-white);
  margin-bottom: 16px;
  transition: var(--transition);
}

.section-card span {
  color: var(--primary-white);
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.section-card:hover svg {
  transform: scale(1.2);
}

/* Back button */
.submit-button {
  display: flex;
  align-items: center;
  background: var(--primary-white);
  color: var(--primary-black);
  font-family: var(--font-family);
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);
  box-shadow: 0 4px 12px var(--shadow);
}

.submit-button:hover {
  background: var(--secondary-white);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px var(--shadow);
}

.submit-button svg {
  margin-right: 8px;
}

/* Form section container */
form {
  background: var(--secondary-black);
  border-radius: var(--border-radius);
  padding: calc(var(--spacing-unit) * 1.5);
  box-shadow: 0 8px 24px var(--shadow);
  margin-top: var(--spacing-unit);
}

/* Input fields */
input, select, textarea {
  font-family: var(--font-family);
  font-size: 16px;
  background: var(--accent-gray);
  color: var(--primary-white);
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  width: 100%;
  transition: var(--transition);
}

input:focus, select:focus, textarea:focus {
  outline: none;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
}

input::placeholder, textarea::placeholder {
  color: var(--secondary-white);
  opacity: 0.6;
}

/* Labels */
label {
  color: var(--primary-white);
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  display: block;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--secondary-black);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: var(--accent-gray);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-white);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .app-container {
    padding: calc(var(--spacing-unit) / 2);
  }

  .app-header {
    font-size: 28px;
  }

  .card-grid {
    grid-template-columns: 1fr;
    gap: calc(var(--spacing-unit) / 2);
  }

  .section-card {
    height: 180px;
  }

  .submit-button {
    padding: 10px 20px;
    font-size: 14px;
  }

  form {
    padding: var(--spacing-unit);
  }

  input, select, textarea {
    font-size: 14px;
    padding: 10px 12px;
  }
}

/* Animation for card entrance */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.section-card {
  animation: slideIn 0.5s ease-out forwards;
  animation-delay: calc(var(--order) * 0.1s);
}

.section-card:nth-child(1) { --order: 1; }
.section-card:nth-child(2) { --order: 2; }
.section-card:nth-child(3) { --order: 3; }
.section-card:nth-child(4) { --order: 4; }
.section-card:nth-child(5) { --order: 5; }
.section-card:nth-child(6) { --order: 6; }
.section-card:nth-child(7) { --order: 7; }
.section-card:nth-child(8) { --order: 8; }