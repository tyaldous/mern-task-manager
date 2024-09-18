import TaskList from './components/TaskList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <div className="task-container">
        <TaskList/>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default App;