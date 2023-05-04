import { createStore } from "vuex";
import taskList from "./modules/taskList";
import select from "./modules/select";
export default createStore({
  modules: { taskList, select },
});
