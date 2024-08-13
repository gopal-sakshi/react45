export default function TaskList({tasks}) {
    function handleChange(e) {
        console.log("change @ task list ===> ", e);
    }
    return (
        <ul>
            {tasks.map((task) => 
                <li key={task.id}>
                    <Task taskIp={task} onChange={handleChange} />
                </li>
            )}
        </ul>
    )
}

function Task({taskIp, onChange, onDelete}) {
    return (
        <>
            <input type="checkbox" 
                onChange={ (e) => onChange({
                    ...taskIp,
                    done: e.target.checked
                })}
            />
            {taskIp.name}
        </>
    )
}