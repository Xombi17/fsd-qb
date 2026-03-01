function TaskItem({ task, index, onDelete }) {
  return (
    <li>
      <span>{task}</span>
      <button onClick={() => onDelete(index)}>Delete</button>
    </li>
  )
}

export default TaskItem
