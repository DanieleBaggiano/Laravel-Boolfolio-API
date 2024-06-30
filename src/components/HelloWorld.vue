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
  <div class="" v-for="item in ProjectCard">
    {{ item.title }}
    {{ item.description }}
    {{ item.slug }}
  </div>
</template>

<style lang="scss" scoped></style>