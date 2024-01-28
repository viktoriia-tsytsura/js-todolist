export function Header(props) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satuday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return <div className="card-header primary-card-header">
        <div className="date">
            <p className="datetext fs-4 text-primary-emphasis"> {days[props.date.getDay()]}, {props.date.getDate()}</p>
            <p className="monthtext fs-6 text-secondary"> {months[props.date.getMonth()]}</p>
        </div>
        <div className="task">
            <p className="tasktext fs-6 text-secondary">{props.taskNumber} Tasks</p>
        </div>
    </div>;
}