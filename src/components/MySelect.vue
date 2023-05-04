<template>
  <div class="row">
    <div class="input-field col s6">
      <select ref="select" v-model="filter">
        <option value="" disabled selected>Choose your option</option>
        <option value="title">Title</option>
        <option value="description">Description</option>
        <option value="date">Date</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    // data() {
    //   return {
    //     filter: null,
    //   };
    // },
    tasks() {
      return this.$store.getters.tasks;
    },
  },
  mounted() {
    M.FormSelect.init(this.$refs.select);
  },
};
</script>
<style></style>
