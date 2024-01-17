import { createTodoItem } from "./model/todoItem-model.js";
import { createTodoItemView } from "./view/todoItem-view.js";

let item = createTodoItem("Get Pizza", "cheese");
console.log(item.getTitle());
// item.setDescription("cheese");

createTodoItemView(item.getTitle(), item.getDescription());
