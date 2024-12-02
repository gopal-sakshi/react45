import { useState } from 'react';

export default function TaskList({tasks, taskChanged, taskDel}) {
    function handleChange(e) {
        console.log("change @ task list ===> ", e);
        taskChanged(e);
    }
    return (
        <ul>
            {tasks.map((task) => 
                <li key={task.id}>
                    <Task taskIp={task} onChange23={handleChange} onDelete23={taskDel} />
                </li>
            )}
        </ul>
    )
}

function Task({taskIp, onChange23, onDelete23}) {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <>
            <input type="checkbox" 
                onChange={ (e) => onChange23({
                    ...taskIp,
                    done23: e.target.checked
                })}
            />
            
            { isEditing ? 
                (<input type="text" value={taskIp.name} 
                    onChange={(e) => {
                        onChange23({
                            ...taskIp,
                            name: e.target.value
                        })
                    }}/>) : 
                (taskIp.name)
            } 
            <button onClick={() => { setIsEditing(!isEditing) } }>
                { isEditing ? 'Save' : 'Edit' } 
            </button>
            
            <button onClick={() => { onDelete23(taskIp) }}>delete</button>
        </>
    )
}