/*
    TasksContext                provides the current list of tasks.
    TasksDispatchContext        provides the function that lets components dispatch actions.
*/

import AddTask from './reducer15_AddTask.js';
import TaskList from './reducer15_TaskList.js';
import { TasksProvider } from './reducer15_TaskContext.js';

export default function TaskApp() {
    return (
        <TasksProvider>
            <h1>Day off in Kyoto</h1>
            <AddTask />
            <TaskList />
        </TasksProvider>
    );
}