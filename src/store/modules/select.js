const select = {
  state: {
    tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
    filter: null,
  },
  getters: {
    sortedTasks(state) {
      return [...state.tasks].sort((task1, task2) =>
        task1.filter?.localeCompare(task2.filter)
      );
    },
  },
  mutations: {
    chooseFilter(state, filter) {
      state.filter = filter;
      console.log(filter);
    },
  },
  actions: {},
};
export default select;
