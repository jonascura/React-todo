import { useState } from 'react'

// customHooks
import useLocalStorage from './hooks/useLocalStorage'

// custom componets
import CustomForm from './components/CustomForm'
import TaskList  from './components/TaskList';
import EditForm from './components/EditForm';

function App() {
  const [ tasks, setTasks ] = useLocalStorage('react-todo.tasks', []);
  const [ previousFocusEl, setPreviousFocusEl ] = useState(null);
  const [ editedTask, setEditedTask ] = useState(null);
  const [ isEditing, setIsEditiing ] = useState(false);


  const addTask = (task) => {
    setTasks(prevState => [... prevState, task])
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id));
  }

  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (
      t.id === id
        ? { ...t, checked: !t.checked }
        : t
    )))
  }

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (
      t.id === task.id
        ? { ...t, name: task.name }
        : t
    )))
    closeEditMode();
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditiing(true);
    // set focus back to original
    setPreviousFocusEl(document.activeElement);
  }

  const closeEditMode = () => {
    setIsEditiing(false);
    // previous state focus
    previousFocusEl.focus();
  }


  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      {isEditing && (
        <EditForm 
          editedTask={editedTask} 
          updateTask={updateTask} 
          closeEditMode={closeEditMode}
        />
      )}
      <CustomForm addTask={addTask} />
      {tasks && (
        <TaskList 
          tasks={tasks} 
          deleteTask={deleteTask} 
          toggleTask={toggleTask} 
          enterEditMode={enterEditMode} 
        />
      )}
    </div>
  )
}

export default App
