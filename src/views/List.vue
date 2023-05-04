<template>
  <div style="padding: 0 50px">
    <h1>List</h1>

    <hr />
    <my-select
      :model-value="filter"
      @change="$store.commit('chooseFilter')"
    ></my-select>
    <hr />
    <table v-if="tasks.length">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Date</th>
          <th>Description</th>
          <th>Open</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) of tasks" :key="task.id">
          <td>{{ index + 1 }}</td>
          <td>{{ task.title }}</td>
          <td>{{ new Date(task.date).toLocaleDateString() }}</td>
          <td>
            <div class="td__descriptions">{{ task.description }}</div>
          </td>
          <td>
            <router-link
              :to="'/task/' + task.id"
              class="btn btn-small"
              tag="button
            "
              >Open</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>No tasks</p>
  </div>
</template>

<script>
import MySelect from "@/components/MySelect.vue";
import { mapGetters } from "vuex";
export default {
  name: "List",
  components: { MySelect },
  computed: {
    ...mapGetters("select", ["sortedTasks"]),
    tasks() {
      return this.$store.getters.tasks;
    },
  },
};
</script>
<style lang="scss" scoped>
.td__descriptions {
  max-width: 500px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
