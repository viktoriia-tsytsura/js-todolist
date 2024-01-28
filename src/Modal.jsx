import { useState } from "react";

export function Modal(props) {

    const [taskName, setName] = useState("");
    function onTaskInput(e) {
        setName(e.target.value);
    }

    const [taskPriority, setPriority] = useState("");
    function onRadioChange(e) {
        setPriority(e.target.value);
    }

    function onSaveClick() {
        props.onSave(taskName, taskPriority)
    }

    return <>
        <div className="modal-bg" id="modal-bg"></div>
        <div className="custom-modal" id="custom-modal">
            <div className="card border-secondary mb-3">
                <div className="card-header">
                    <p className="modal-title">Add new item</p>
                </div>
                <div className="card-body text-secondary">
                    <div className="mb-3">
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="New task" value={taskName} onChange={onTaskInput} />
                    </div>
                    <div className="mb-3">
                        <p> Select priority </p>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="low" checked={taskPriority === 'low'} onChange={onRadioChange} />
                            <label className="form-check-label text-success" htmlFor="inlineRadio1">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="medium" checked={taskPriority === 'medium'} onChange={onRadioChange} />
                            <label className="form-check-label text-warning-emphasis" htmlFor="inlineRadio2">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="high" checked={taskPriority === 'high'} onChange={onRadioChange} />
                            <label className="form-check-label text-danger" htmlFor="inlineRadio3">High</label>
                        </div>
                    </div>
                </div>
                <div className="card-footer bg-transparent">
                    <button type="button" className="btn btn-secondary" onClick={props.onClose}>Close</button>
                    <button type="button" className="btn btn-primary" disabled={taskName === "" || taskPriority === ""} onClick={onSaveClick}>Save</button>
                </div>
            </div>
        </div>
    </>;
}