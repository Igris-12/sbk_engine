import React, { createContext, useState, useContext, useCallback } from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

const FlashContext = createContext();
export const useFlash = () => useContext(FlashContext);

export const FlashProvider = ({ children }) => {
  const [flashConfig, setFlashConfig] = useState({ message: '', type: 'success' });
  const [isVisible, setIsVisible] = useState(false);

  const showFlashMessage = useCallback((message, type = 'success') => {
    setFlashConfig({ message, type });
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 4000);
  }, []);

  const hideFlashMessage = useCallback(() => {
    setIsVisible(false);
  }, []);

  const value = {
    showFlashMessage,
    hideFlashMessage,
    message: flashConfig.message,
    type: flashConfig.type,
    isVisible,
  };

  return (
    <FlashContext.Provider value={value}>
      {children}

      {/* 🔥 Flash Message UI */}
      {isVisible && (
        <div
          className={`fixed top-5 right-5 z-50 px-5 py-3 rounded-lg shadow-lg text-white flex items-center gap-3 transition-all duration-500
          ${flashConfig.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}
        >
          {flashConfig.type === 'success' ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <XCircle className="w-5 h-5" />
          )}
          <span>{flashConfig.message}</span>
          <button onClick={hideFlashMessage} className="ml-2 text-white/70 hover:text-white">✕</button>
        </div>
      )}
    </FlashContext.Provider>
  );
};
