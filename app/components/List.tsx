import React, { useState } from 'react';

interface ListProps<T> {
  items: T[];
  selectedItems: T[];
  onItemSelect: (selected: T[]) => void;
}

const List: React.FC<ListProps<string>> = ({ items, selectedItems, onItemSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleItemClick = (item: string) => {
    const newSelectedItems = selectedItems.includes(item)
      ? selectedItems.filter((i) => i !== item)
      : [...selectedItems, item];
    onItemSelect(newSelectedItems);
  };

  return (
    <div className="border border-gray-200 rounded-md p-4">
      <h3 className="text-sm font-medium text-gray-900">
        {/* Add a title or prompt for the list */}
      </h3>
      <ul className="mt-3 space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className={`cursor-pointer select-none ${
              selectedItems.includes(item) ? 'bg-gray-100 text-blue-700' : ''
            }`}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
