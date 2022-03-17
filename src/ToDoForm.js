import React, { useState } from 'react';
import { ThemeContext } from './components/ThemeContext';


const ToDoForm = ({ addTask }) => {

  const [userInput, setUserInput] = useState('');
  const { theme } = React.useContext(ThemeContext);

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  }
  return (
    <>
      {theme === 'dark' ? (
      <div className={'border-2 border-grey-dark p-5 max-w-xl mb-5 bg-desaturated-blue'}>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-row space-x-4'>
            <input type="checkbox" className='form-checkbox' onChange={handleChange} />
              <input value={userInput} type="text" placeholder="Currently typing..." className={'appearance-none bg-desaturated-blue border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'} />
          </div>


        </form>
      </div>
    ): (
        <div className={'border-2 border-grey-dark p-5 max-w-xl mb-5 bg-desaturated-light'}>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-row space-x-4'>
              <input type="checkbox" className='form-checkbox' onChange={handleChange} />
                <input value={userInput} type="text" placeholder="Currently typing..." className={'appearance-none bg-desaturated-light border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'} />
            </div>


          </form>
        </div>
    )}
   </>
  );
};

export default ToDoForm;