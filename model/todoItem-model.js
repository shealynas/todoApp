/* Brainstorm what kind of properties your todo-items are going to have. 
At a minimum they should have a title, description, dueDate and priority. 
You might also want to include notes or even a checklist. */

export function createTodoItem(title, description) {
  const setTitle = (newTitle) => {
    if (newTitle.trim() === "" || typeof newTitle !== "string") {
      throw new Error("Title must be a non-empty string");
    }
    title = newTitle;
  };

  const getTitle = () => {
    return title;
  };

  const setDescription = (newDescription) => {
    if (typeof newDescription !== "string" || newDescription === "") {
      throw new Error("Description must be a non-empty string");
    }
    description = newDescription;
  };

  const getDescription = () => {
    return description;
  };

  return { setTitle, getTitle, setDescription, getDescription };
}
