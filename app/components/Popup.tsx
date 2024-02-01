// components/Popup.tsx
import React from 'react';

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <div id="popup" className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md">
        <div id="brandList">
          <h2 className="text-lg font-bold mb-4">Select brand:</h2>
          <ul>
            <li className="brand-item" onClick={() => handleBrandSelection('Audi')}>
              Audi
            </li>
            <li className="brand-item" onClick={() => handleBrandSelection('BMW')}>
              BMW
            </li>
            {/* Add other brands as needed */}
          </ul>
        </div>
        <div id="modelList" style={{ display: 'none' }}>
          <h2 className="text-lg font-bold mb-4">Select model:</h2>
          {/* Populate model list based on the selected brand */}
          {/* Example: */}
          <ul>
            <li onClick={() => handleModelSelection('Model 1')}>Model 1</li>
            <li onClick={() => handleModelSelection('Model 2')}>Model 2</li>
            {/* Add other models as needed */}
          </ul>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            id="closePopupButton"
            className="text-gray-600"
            onClick={() => {
              // Handle close button click
              onClose();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
