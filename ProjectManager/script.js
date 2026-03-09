function addTask() {
  let project = document.getElementById("project").value;
  let task = document.getElementById("task").value;
  let date = document.getElementById("date").value;

  let li = document.createElement("li");
  li.innerText = project + " - " + task + " (Deadline: " + date + ")";
  document.getElementById("taskList").appendChild(li);
}
