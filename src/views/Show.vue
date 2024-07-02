<script>
import axios from 'axios';

export default {
    name: 'Show',
    data() {
        return {
            project: {}
        };
    },
    created() {
        this.fetchProject();
    },
    methods: {
        fetchProject() {
            const projectId = this.$route.params.id;
            axios
                .get(`http://localhost:8000/api/projects/${projectId}`)
                .then(response => {
                    this.project = response.data;
                })
                .catch(error => {
                    console.error('Error fetching project:', error);
                });
        }
    }
};
</script>

<template>
    <div>
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
        <p>{{ project.slug }}</p>
    </div>
</template>

<style lang="scss" scoped></style>