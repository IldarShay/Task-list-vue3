<template>
  <div>
    <div v-if="task">
      <h1></h1>
      <div class="row">
        <div class="col s6 offset-s3">
          <div class="card">
            <div class="card-content">
              <span class="card-title"
                ><strong>{{ task.title }}</strong></span
              >
              <hr />
              <div class="chips" ref="chips"></div>
              <div class="input-field">
                <textarea
                  v-model="description"
                  id="description"
                  class="materialize-textarea"
                  style="min-height: 145px"
                ></textarea>
                <label for="description">Description</label>
                <span
                  class="character-counter materialize-textarea"
                  style="float: right; font-size: 12px"
                  >{{ description.length }}/2048</span
                >
              </div>
              <input type="text" ref="datepicker" />
            </div>
            <div
              class="card-action"
              style="display: flex; justify-content: space-between"
            >
              <router-link
                tag="button"
                class="btn-small blue"
                to="/list"
                @click="submitHandler"
              >
                Complete task</router-link
              >
              <button
                class="btn-small"
                @click="removeTask"
                style="padding: 0 40px"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p v-else>Task not found</p>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    task() {
      return this.$store.getters.taskById(+this.$route.params.id);
    },
  },
  data() {
    return {
      date: null,
      description: "",
      chips: null,
    };
  },
  name: "create",
  components: {},
  methods: {
    submitHandler() {
      this.$store.dispatch("updateTask", {
        id: this.task.id,
        description: this.description,
        date: this.date.date,
      });
      this.$router.push("/list");
    },
    removeTask() {
      this.$store.dispatch("removeTask", this.task.id);
      this.$router.push("/list");
    },
  },
  mounted() {
    this.description = this.task.description;
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: "Tag text",
      data: this.task.tags,
    });
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      autoClose: true,
      format: "dddd dd mmmm yyyy",
      defaultDate: new Date(),
      setDefaultDate: true,
    });
    setTimeout(() => {
      M.updateTextFields();
    }, 0);
  },
};
</script>
<style scoped></style>
