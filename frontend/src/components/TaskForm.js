
const TaskForm = ({createTask, name, handleInputChange}) => {
  return (
    <form className="task-form" onSubmit={createTask}>
        <input type = "text" placeholder = "Add Task"
        name="name" value={name} onChange={handleInputChange}/>
        <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm