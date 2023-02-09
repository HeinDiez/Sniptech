import React, { useState } from 'react';

interface Props {
  onFilterChange: (state: string) => void;
}

const Filter: React.FC<Props> = ({ onFilterChange }) => {
  const [selectedState, setSelectedState] = useState<string>('all');

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(event.target.value);
    onFilterChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="state-filter">Filter by State:</label>
      <select
        id="state-filter"
        value={selectedState}
        onChange={handleFilterChange}
      >
        <option value="all">All</option>
        <option value="open">Open</option>
        <option value="closed">Closed</option>
      </select>
    </div>
  );
};

export default Filter;
