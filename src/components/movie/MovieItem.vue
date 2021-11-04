<template>
  <div class="movie-item-container">
    <ul>
      <li>
        <!-- check if image is not available from api and use a default image -->
        <img
          :src="movie.Poster === 'N/A' ? 'https://2gyntc2a2i9a22ifya16a222-wpengine.netdna-ssl.com/wp-content/uploads/sites/29/2014/12/Image-Not-Available.jpg' : movie.Poster"
          :alt="movie.Title"
          class="movie-img"
        />
      </li>
      <li>&middot; &middot; &middot; &middot; &middot; &middot; &middot; &middot;</li>
      <li>
        <h3>
          <router-link :to="'/movie/' + movie.imdbID">{{ movie.Title }}</router-link>
        </h3>
      </li>
      <li>
        <h4>Year | {{ movie.Year }} &middot; Type | {{ movie.Type }}</h4>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MovieItem',
  props: ['movie'],
};
</script>

<style>
/* movie listing page */
.movie-item-container {
  color: #ffffff;
  padding-bottom: 15px;
}

.movie-item-container h3 {
  font-size: 16px;
  line-height: 18px;
  padding: 0px;
  margin: 0px;
  max-width: 160px;
}

.movie-item-container h4 {
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
  opacity: 0.5;
  padding: 0px;
  margin: 0px;
  max-width: 160px;
}

.movie-item-container ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

.movie-item-container ul li {
  padding: 0px;
  margin: 0px;
  padding-bottom: 4px;
}

.movie-item-container .movie-img {
  width: 166px;
  height: 250px;
  padding: 0px 2.5px;
}

.movie-item-container .rating-img {
  width: 80px;
}

.movie-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
