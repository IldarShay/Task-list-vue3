<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h1>Create Task</h1>
      <form @submit.prevent="submitHandler">
        <div class="input-field">
          <input
            v-model="title"
            id="title"
            type="text"
            class="validate"
            required
            data-length="120"
          />
          <label for="title">Title</label>
          <span class="helper-text" data-error="Title is required"></span>
        </div>
        <div class="chips" ref="chips"></div>
        <div class="input-field">
          <textarea
            v-model="description"
            id="description"
            class="materialize-textarea"
          ></textarea>
          <label for="description">Description</label>
          <span
            class="character-counter materialize-textarea"
            style="float: right; font-size: 12px"
            >{{ description.length }}/2048</span
          >
        </div>
        <input type="text" ref="datepicker" />
        <button class="btn" type="submit">Create task</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: "",
      title: "",
      chips: null,
      date: null,
    };
  },
  name: "create",
  components: {},
  methods: {
    submitHandler() {
      const task = {
        title: this.title,
        description: this.description,
        id: Date.now(),
        tags: this.chips.chipsData,
        date: this.date.date,
      };
      this.$store.dispatch("createTask", task);
      this.title = this.description = "";
      this.$router.push("/list");
    },
  },
  mounted() {
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: "Task text",
    });
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      autoClose: true,
      format: "dddd dd mmmm yyyy",
      defaultDate: new Date(),
      setDefaultDate: true,
    });
  },
  destroyed() {
    if (this.date && this.date.destroy) {
      this.date.destroy;
    }
    if (this.chips && this.chips.destroy) {
      this.chips.destroy;
    }
  },
};
</script>
<style scoped></style>
