import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedCombo, setSelectedCombo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const openBookingModal = (combo = null) => {
    setSelectedCombo(combo);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedCombo(null);
  };

  // Mock function to simulate form submission
  const submitBooking = async (formData) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate successful submission
    console.log('Booking submitted:', { ...formData, package: selectedCombo });
    
    setIsLoading(false);
    return { success: true, message: 'Booking request received successfully!' };
  };

  const submitContact = async (formData) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate successful submission
    console.log('Contact form submitted:', formData);
    
    setIsLoading(false);
    return { success: true, message: 'Message sent successfully!' };
  };

  const value = {
    isBookingModalOpen,
    selectedCombo,
    isLoading,
    setIsLoading,
    openBookingModal,
    closeBookingModal,
    submitBooking,
    submitContact
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};