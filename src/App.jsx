import { useState, useEffect } from 'react';
import { TaskList } from './TaskList';
import { Header } from './Header';
import { Modal } from './Modal';

const map = {
    "low": 1,
    "medium": 2,
    "high": 3
};

export function App() {
    const currentDate = new Date();

    const [tasksToDo, setTasks] = useState([]);

    useEffect(() => {
        const initialTasks = JSON.parse(localStorage.getItem('savedTasks') ?? "[]");
        setTasks(initialTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('savedTasks', JSON.stringify(tasksToDo));
    }, [tasksToDo]);

    function onTaskChecked(name, checked) {
        const i = tasksToDo.findIndex(item => item.taskName === name);

        const changedTasks = [...tasksToDo];
        changedTasks[i] = {
            ...changedTasks[i],
            isChecked: checked,
        };
        setTasks(changedTasks);
    }

    const [isModalShown, setModalShown] = useState(false);

    function onAddTaskClick() {
        setModalShown(true);
    }

    function onModalClose() {
        setModalShown(false);
    }

    function onModalSave(name, priority) {
        const newTasks = [...tasksToDo];
        newTasks.push({
            taskName: name,
            priority: priority,
            isChecked: false
        });
        newTasks.sort((a,b) => {
            const priorityA = map[a.priority];
            const priorityB = map[b.priority];
            return priorityB - priorityA
        });
        setTasks(newTasks);
        setModalShown(false);
    }

    function onTasksClear() {
        const tasksAfterDelete = tasksToDo.filter(item => !item.isChecked);
        setTasks(tasksAfterDelete);
    }

    return <>
        <div className="main-container">
            <div className="mainbox card text-bg-light mb-3">
                <Header taskNumber={tasksToDo.length} date={currentDate} />
            
                <div className="card-body primary-card-body">
                    <TaskList tasks={tasksToDo} onTaskChecked={onTaskChecked} onAddClick={onAddTaskClick} onClearClick={onTasksClear}/>
                </div>
            </div>
        </div>
        {isModalShown ? <Modal onClose={onModalClose} onSave={onModalSave} /> : undefined}
    </>;
}