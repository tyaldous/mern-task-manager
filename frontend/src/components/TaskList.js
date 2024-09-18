import { useState, useEffect } from "react"
import Task from "./Task"
import TaskForm from "./TaskForm"
import {toast} from "react-toastify"
import axios from "axios"

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setcompletedTasks] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [formData, setformData] = useState({
        name: "",
        completed: false,

    });
    const {name} = formData;

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setformData({...formData, [name]: value});
    }

    const getTasks = async () => {
        setisLoading(true);
        try {
            const {data} = await axios.get("/api/tasks")
            setTasks(data);
            console.log({data});
            setisLoading(false);
        } catch (error) {
            toast.error(error.message);
            setisLoading(false);
        }
    }
    useEffect(() => {
      getTasks()
    
    }, [])
    
    const createTask = async (e) => {
        e.preventDefault();
        console.log(formData);
        if (name === "") {
            return toast.error("Input field cannot be empty");
        }
        try {
            await axios.post("/api/tasks", formData);
            toast.success("Task Added Successfully");
            setformData({...formData, name: ""})
        } catch (error) {
            toast.error(error.message);
        }
    }


    return (
<div>
        <h2>Task Manager</h2>
        <TaskForm name={name} handleInputChange={handleInputChange} createTask={createTask}/>
        <div className="--flex-between --pb">
            <p>
                <b>Total Tasks: </b> 0
            </p>
            <p>
                <b>Completed Tasks: </b> 0
            </p>
            <hr/>
            </div>
            {
                !isLoading && tasks.length === 0 ? (
                    <p>No Tasks Found</p>
                ) : (<>{tasks.map((task, index) => {
                    return (
                        <Task key={task._id} task={task} index={index}/>
                    )
                })}</>)
            }
            
        </div>
  )
}

export default TaskList