import React from 'react';

type Props = {
    label: string;
    value: string;
    onChange: (value: string)=> void;
}

const Input = ({ label, value, onChange}: Props) => {
  return (
    <label>
        {label}:
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
    </label>
  );
};

export default Input;