import React from "react";

interface InputProps {
  label?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  required?: boolean;
}

export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  name,
  required = false,
}: InputProps) {
  return (
    <div className="flex flex-col w-full mb-4">
      {label && (
        <label htmlFor={name} className="text-gray-700 font-medium mb-1">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="border border-gray-300 rounded-lg px-3 py-2 text-gray-800 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   focus:border-transparent transition-all duration-200"
      />
    </div>
  );
}
