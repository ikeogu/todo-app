import React from 'react';

import { ThemeContext } from './ThemeContext';

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === 'dark' ? (
        <img src='/images/icon-sun.svg' alt='sun'  
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="w-5 h-7 cursor-pointer"
        />
      ) : (
          <img src='/images/icon-moon.svg' alt='moon'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-5 h-7 cursor-pointer cursor-pointer"
        />
      )}
    </div>
  );
};

export default Toggle;