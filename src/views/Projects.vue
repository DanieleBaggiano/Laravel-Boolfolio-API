<script>
import axios from 'axios';

export default {
  name: 'Projects',
  data() {
    return {
      UserCard: [],
      ProjectCard: [],
      currentPage: 1,
      totalPages: 3,
    };
  },
  created() {
    this.fetchUsers();
    this.fetchProjects();
  },
  methods: {
    fetchUsers() {
      axios
        .get('http://localhost:8000/api/users')
        .then(response => {
          this.UserCard = response.data.results;
          console.log(this.UserCard);
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    },
    fetchProjects() {
      axios
        .get('http://localhost:8000/api/projects', {
          params: {
            page: this.currentPage,
            per_page: 1,
          },
        })
        .then(response => {
          this.ProjectCard = response.data.results;
          this.totalPages = response.data.pagination.total_pages;
          console.log(this.ProjectCard);
          console.log(this.totalPages);
        })
        .catch(error => {
          console.error('Error fetching projects:', error);
        });
    },
    goToPage(page) {
      this.currentPage = page;
      this.fetchProjects();
    },
  },
};
</script>

<template>
    <div>
      <div class="d-flex align-items-center justify-content-center p-3">
        <div class="card m-3" v-for="item in ProjectCard" :key="item.id">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.description }}</p>
            <p class="card-text">{{ item.slug }}</p>
          </div>
        </div>
      </div>
  
      <nav aria-label="Page navigation example">
        <ul class="pagination d-flex justify-content-center">
          <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
            <a class="page-link" href="#" @click.prevent="goToPage(page)">{{ page }}</a>
          </li>
        </ul>
      </nav>
    </div>
</template>  

<style lang="scss" scoped></style>

