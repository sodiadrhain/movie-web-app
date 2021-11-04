<template>
  <main>
    <NavBar />
    <MovieSearch />
    <MovieState />
  </main>
</template>

<script>
import NavBar from '../layout/NavBar.vue';
import MovieSearch from '../components/movie/MovieSearch.vue';
import MovieState from '../components/movie/MovieState.vue';
export default {
  components: {
    NavBar,
    MovieSearch,
    MovieState,
  },
};
</script>

<style scoped>
main {
  margin-top: 45px;
  padding: 0px 16px;
}
</style>
