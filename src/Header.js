import React from 'react';
import { ThemeContext } from './components/ThemeContext';

const Header = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
    { theme === 'dark' ? (
      <header className='bg-hero-pattern bg-cover bg-no-repeat h-80 '>

      </header>
    ) : (
        <header className='bg-hero-pattern-light bg-cover bg-no-repeat h-80 '>

        </header>
    )}
   </div>
  );
};

export default Header;