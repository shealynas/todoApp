/* <div class="todo-container">
      <h1 class="title">Title</h1>
    </div> */

export function createTodoItemView(title, description) {
  const TODO_CONTAINER = document.createElement("div");
  const TITLE = document.createElement("h1");
  const DESCRIPTION = document.createElement("p");

  TODO_CONTAINER.classList.add("todo-container");

  TITLE.textContent = title;
  DESCRIPTION.textContent = description;

  TODO_CONTAINER.append(TITLE, DESCRIPTION);
  document.body.append(TODO_CONTAINER);
}
