<script>
import axios from "axios";
export default {
  data() {
    return {
      ProjectCard: [],
    }
  },
  created() {
    axios.get("http://localhost:8000/api/users").then(Response => {
      this.ProjectCard = Response.data.users;
      console.log(this.ProjectCard);
    })
  },
}
</script>

<template>
  <div>
    miao
  </div>
</template>

<style lang="scss" scoped></style>