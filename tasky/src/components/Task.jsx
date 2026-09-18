const Task = (props) => {
        return (
        <div className="card" style={{backgroundColor: props.done ? '#9abc34' : '#f0904b'}}>
            <p className="title">{props.title}</p>
            <p className="deadline">Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <p className="priority">{props.priority}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
        </div>
    )

}

export default Task;
