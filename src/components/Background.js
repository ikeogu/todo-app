import React from 'react';
import { ThemeContext } from './ThemeContext';

const Background = ({ children }) => {
  const { theme } = React.useContext(ThemeContext);
  return (
  <>
      {theme === 'dark' ? (
        <body className={'bg-mydark transition-all h-screen flex flex-col'}>
          {children}
        </body>
      ) : (
      <body className={'bg-desaturated-light transition-all h-screen flex flex-col'}>
          {children}
        </body>
      )
    }
      </>
  )
   
}

export default Background;