export function TaskList(props) {

    const tasks = props.tasks.map((item, i) => {

        return <li className="list-group-item" key={item.taskName}>
            <input className="form-check-input me-1" type="checkbox" checked={item.isChecked} id={i} onChange={(e) => props.onTaskChecked(item.taskName, e.target.checked)} />
            <label className={`form-check-label ${item.isChecked ? "crossed" : ""}`} htmlFor={i}>{item.taskName}</label> 
            <span className="fs-7 text-secondary">{item.priority}</span>
        </li>;
    });

    return <ul className="list-group">
        <button type="button" className="btn-add" onClick={props.onAddClick}>➕</button>
        {tasks}
        <button type="button" className={`btn btn-secondary btn-clear ${props.tasks.some(item => item.isChecked) ? "" : "hidden"}`} onClick={props.onClearClick}>Clear checked</button>
    </ul>;
}
