import { useState } from 'react';
import AddTask from './entry1_AddTask';
import TaskList from './entry1_TaskList';

export default function() {
    const [tasks_fromState, setTasks] = useState(tasks23);
    
    function newTaskAdded(e) {
        console.log("new task added ==> ", e);
        setTasks([
            ...tasks_fromState, { id: nextId++, name: e, done23: false }
        ])
    }

    function changeTask(e) {
        console.log("task changed ===> ", e);
        setTasks(
            tasks_fromState.map((task23) => {
                if(task23.id == e.id) { return e; }
                else { return task23; }
            })
        )
    }

    function del_cheyyi_ra(e) {
        setTasks(
            tasks_fromState.filter((task24) => task24.id != e.id)
        )
    }
    return (
        <>
            <h1>Practice Todo23</h1>
            <AddTask handleChange={newTaskAdded}/>
            <TaskList tasks={tasks_fromState} taskChanged={changeTask} taskDel={del_cheyyi_ra}/>
        </>
    )
}

const tasks23 = [
    { id: 0, name: 'brush teeth', done23: true },
    { id: 1, name: 'take bath', done23: false },
    { id: 2, name: 'eat food', done23: false }
]

let nextId = 3;