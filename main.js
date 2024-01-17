import { createTodoItem } from "./model/todoItem-model.js";
import { createTodoItemView } from "./view/todoItem-view.js";

let item = createTodoItem("Get Pizza", "cheese");
console.log(item.getTitle());

createTodoItemView(item.getTitle(), item.getDescription());
