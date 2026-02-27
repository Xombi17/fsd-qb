// TaskItem component - displays a single task with delete button
function TaskItem({ task, onDelete }) {
  return (
    <li>
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  )
}

export default TaskItem
