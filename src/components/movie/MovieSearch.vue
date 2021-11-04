<template>
  <div class="movie-search-container">
    <form @submit.prevent="handleSubmit">
      <input type="text" name="search" id="search" placeholder="Type movie name here..." required />
      <div class="movie-search-right">
        <img src="../../assets/images/zoom.svg" alt="play" class="img-search" />
        <button type="submit"><h3>Search</h3></button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions({
      addSearch: 'searchMovies',
    }),
    handleSubmit(e) {
      const payload = {
        searchText: e.target.search.value,
        pageNumber: null,
      };
      this.addSearch(payload);
    },
  },
};
</script>

<style scoped>
/* movie search */
.movie-search-right {
  background: #d9251d;
  border-radius: 16px;
  display: flex;
  padding: 1px 15px;
  width: 80px;
}

.movie-search-container form {
  display: flex;
  justify-content: space-between;
  border: 1px solid #2c3f5b;
  box-sizing: border-box;
  border-radius: 20px;
  margin-top: 28px;
  margin-bottom: 24px;
  padding: 4px;
  flex-wrap: wrap;
}

.movie-search-container form input {
  border-radius: 16px;
  width: 50%;
  padding: 10px;
  background-color: #0f1b2b;
  border: none;
  color: #ffffff;
  opacity: 0.8;
}

.movie-search-container form button {
  border: none;
  cursor: pointer;
  background: #d9251d;
  padding: 0px;
  margin: 0px;
}

h3 {
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
}

.img-search {
  margin-right: 7px;
}
</style>
