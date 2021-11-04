<template>
  <div v-if="loading"><Loader /></div>
  <div v-else>
    <h3 v-if="searchItem">Search Results for: {{ searchItem }}</h3>
    <h3 v-else>Recommended</h3>
    <div v-if="errMsg">
      <small> {{ errMsg }} Try another Search!</small>
    </div>
    <div v-else>
      <div class="movie-container">
        <MovieItem v-for="movie in movies" :movie="movie" :key="movie.imdbID" />
      </div>
      <div v-if="searchItem">
        <MoviePagination />
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from './MovieItem.vue';
import Loader from '../../layout/Loader.vue';
import MoviePagination from './MoviePagination.vue';
export default {
  components: {
    MovieItem,
    Loader,
    MoviePagination,
  },
  computed: {
    movies() {
      return this.$store.getters.movies;
    },
    loading() {
      return this.$store.getters.loading;
    },
    searchItem() {
      return this.$store.getters.searchItem;
    },
    errMsg() {
      return this.$store.getters.errMsg;
    },
  },
  created() {
    const searchItem = this.$store.getters.searchItem;
    if (searchItem) {
      const payload = {
        searchText: searchItem,
        pageNumber: this.$store.getters.pages,
      };
      this.$store.dispatch('searchMovies', payload);
    } else {
      this.$store.dispatch('loadMovies');
    }
  },
};
</script>

<style scoped>
h3 {
  font-weight: 600;
  font-size: 20px;
  line-height: 18px;
  color: #ffffff;
}

small {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  opacity: 0.7;
}
</style>
