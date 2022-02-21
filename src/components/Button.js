import React from 'react';

const Button = ({ type = 'fill', text, theme = 'dark', handle }) => {
  const handleType = (type) => {
    if (type === 'outline') {
      return 'border border-purple-600 | hover:bg-purple-800';
    } else if (type === 'fill') {
      return 'bg-purple-600 hover:bg-purple-800';
    }
  };

  const handleTheme = (theme) => {
    if (theme === 'white') {
      return 'text-gray-500 | hover:text-white';
    } else if (theme === 'dark') {
      return 'text-white';
    }
  };

  return (
    <button
      onClick={handle}
      className={`px-4 py-1 | rounded-sm  text-sm font-semibold transition transition-300 | 
      ${handleType(type)} ${handleTheme(theme)}`}
    >
      {text}
    </button>
  );
};

export default Button;
