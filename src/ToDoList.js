import React,{useState} from 'react';
import ToDo from './ToDo';
import { ThemeContext } from './components/ThemeContext';



const ToDoList = ({ toDoList, handleToggle, handleFilter, handleFilterCompleted, handleFilterAll, handleFilterActive, handleRemove }) => {
  const [checked, setChecked] = useState(false);
  const { theme } = React.useContext(ThemeContext);

  return (
  <>
    { theme === 'dark' ? (
      <div>
        <ul className='list-outside'>
          {toDoList.map(todo => {
            return (
              <div className='flex flex-row space-x-16 bg-desaturated-blue border-2 border-grey-dark p-5 max-w-xl'>
                <div className='flex flex-row space-x-7 grow text-white'>
                  <div className='round'>
                    <input type="checkbox" checked id="checkbox" />
                    <label className='checkbox'></label>
                  </div>


                  <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />
                </div>
                <div className={todo.complete == true ? "visible" : "invisible"}>
                  <img src='/images/icon-cross.svg' alt='crossx' className='w-5 h-7' onClick={() => handleRemove(todo.id)} />
                </div>

              </div>

            )
          })}
        </ul>
          <div className='flex flex-row space-x-16 bg-desaturated-blue border-2 border-grey-dark p-5 max-w-xl text-mygrey'>
          <div>
            <p>{toDoList.length} items left</p>
          </div>

          <div className='flex flex-row space-x-4'>
            <div>
              <button onClick={handleFilterAll}>All</button>
            </div>
            <div>
              <button onClick={handleFilterActive}>Active</button>
            </div>
            <div>
              <button onClick={handleFilterCompleted}>Completed</button>
            </div>

          </div>
          <div>
            <button onClick={handleFilter}>Clear Completed</button>
          </div>
        </div>

      </div>
    ) : (
        <div>
          <ul className='list-outside'>
            {toDoList.map(todo => {
              return (
                <div className='flex flex-row space-x-16 bg-desaturated-light border-2 border-grey-dark p-5 max-w-xl'>
                  <div className='flex flex-row space-x-7 grow text-text-mygrey'>
                    <div className='round'>
                      <input type="checkbox" checked id="checkbox" />
                      <label className='checkbox'></label>
                    </div>


                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />
                  </div>
                  <div className={todo.complete == true ? "visible" : "invisible"}>
                    <img src='/images/icon-cross.svg' alt='crossx' className='w-5 h-7' onClick={() => handleRemove(todo.id)} />
                  </div>

                </div>

              )
            })}
          </ul>
            <div className='flex flex-row space-x-16 bg-desaturated-light border-2 border-grey-dark p-5 max-w-xl text-mygrey'>
            <div>
              <p>{toDoList.length} items left</p>
            </div>

            <div className='flex flex-row space-x-4'>
              <div>
                <button onClick={handleFilterAll}>All</button>
              </div>
              <div>
                <button onClick={handleFilterActive}>Active</button>
              </div>
              <div>
                <button onClick={handleFilterCompleted}>Completed</button>
              </div>

            </div>
            <div>
              <button onClick={handleFilter}>Clear Completed</button>
            </div>
          </div>

        </div>
    ) }
  </>
  );
};

export default ToDoList;