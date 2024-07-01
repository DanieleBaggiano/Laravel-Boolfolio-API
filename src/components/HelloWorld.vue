<script>
import axios from "axios";
export default {
  data() {
    return {
      UserCard: [],
      ProjectCard: [],
    }
  },
  created() {
    axios.get("http://localhost:8000/api/users").then(Response => {
      this.UserCard = Response.data.results;
      console.log(this.UserCard);
    });

    axios.get("http://localhost:8000/api/projects").then(Response => {
      this.ProjectCard = Response.data.results;
      console.log(this.ProjectCard);
    });
  },
}
</script>

<template>
  <div class="d-flex flex-column align-items-center p-3">
    <div class="card m-3" v-for="item in ProjectCard">
      <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
        <p class="card-text">{{ item.description }}</p>
        <p class="card-text">{{ item.slug }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>