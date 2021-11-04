<template>
  <div>
    <MovieItem v-for="movie in movies" :movie="movie" :key="movie.id" />
  </div>
</template>

<script>
import MovieItem from './MovieItem.vue';
export default {
  components: {
    MovieItem,
  },
  setup() {
    const movies = [
      {
        id: 1,
        name: 'chealsea shoe',
        price: 600,
      },
      {
        id: 2,
        name: 'chealsea shoe',
        price: 600,
      },
      {
        id: 3,
        name: 'chealsea shoe',
        price: 600,
      },
    ];

    return { movies };
  },
};
</script>
