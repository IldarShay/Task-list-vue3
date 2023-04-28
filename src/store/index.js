import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
  },
  getters: {
    tasks: (state) => state.tasks,
    taskById: (state) => (id) => state.tasks.find((task) => task.id === id),
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task);

      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    updateTask(state, { id, description, date }) {
      const tasks = state.tasks.slice(0);
      const index = tasks.findIndex((t) => t.id === id);
      tasks[index] = { ...tasks[index], date, description };
      state.tasks = tasks;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    removeTask(state, id) {
      const index = state.tasks.findIndex((t) => t.id === id);
      console.log(state.tasks[index]);
      state.tasks.splice(state.tasks[index], 1);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
  actions: {
    createTask({ commit }, task) {
      commit("createTask", task);
    },
    updateTask({ commit }, task) {
      commit("updateTask", task);
    },
    removeTask({ commit }, id) {
      commit("removeTask", id);
    },
  },
  modules: {},
});
