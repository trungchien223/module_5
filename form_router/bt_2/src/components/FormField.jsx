import React from 'react';

const FormField = ({ 
  label, 
  name, 
  type = 'text', 
  register, 
  error, 
  options = [], 
  placeholder = '' 
}) => {
  const renderField = () => {
    switch (type) {
      case 'radio':
        return (
          <div className="flex gap-4">
            {options.map((option) => (
              <label key={option.value} className="flex items-center gap-2">
                <input
                  type="radio"
                  value={option.value}
                  {...register(name)}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        );
      
      case 'checkbox':
        return (
          <input
            type="checkbox"
            {...register(name)}
            className="w-4 h-4 text-blue-600 rounded"
          />
        );
      
      default:
        return (
          <input
            type={type}
            {...register(name)}
            placeholder={placeholder}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        );
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      {renderField()}
      {error && (
        <p className="mt-1 text-sm text-red-600">{error.message}</p>
      )}
    </div>
  );
};

export default FormField;
