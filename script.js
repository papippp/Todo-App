
const tasks = []
function addTask() {
  const task = prompt('enter a task')
  tasks.push(task)
  alert('task added')

}

function viewTask() {
  let taskList = 'Task: \n';
  for (task of tasks) {
    taskList += `- ${task}\n`
  }
  alert(taskList)
}