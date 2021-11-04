<template>
  <div v-if="loading"><Loader /></div>
  <div v-else>
    <div
      class="movie-detail-container"
      :style="`background: linear-gradient(rgb(0 0 0 / 9%) 100%, rgb(0 0 0 / 48%) 100%), url('${movieDetail.Poster}'); background-repeat: no-repeat; background-size: cover;`"
    >
      <div class="items">
        <a @click="$router.back()"><img src="../../assets/images/arrow.svg" alt="back-button-arrow" class="back-button-image" /></a>
        <a :href="'https://www.imdb.com/title/' + movieDetail.imdbID" target="_blank"><img src="../../assets/images/play-detail.svg" alt="play-button-arrow" class="play-image" /></a>
        <a :href="'https://www.imdb.com/title/' + movieDetail.imdbID" target="_blank"><img src="../../assets/images/respond-arrow.svg" alt="next-button-arrow" class="next-button-image" /></a>
      </div>
    </div>
    <div class="movie-detail-item">
      <ul>
        <li>
          <img :src="movieDetail.Poster" :alt="movieDetail.Title" class="movie-image" />
        </li>
        <li>
          <h3>{{ movieDetail.Title }}</h3>
        </li>
        <li>
          <h4>{{ movieDetail.Runtime }} | Runtime</h4>
        </li>
        <li>
          <h4>{{ movieDetail.Genre }}</h4>
        </li>
      </ul>
    </div>
    <div class="movie-detail-item-info">
      <div class="movie-details">
        <div class="item">
          <span class="selected tab-details" @click="showDetails()">Details</span>
          <span class="unselected tab-ratings" @click="showRatings()">Ratings</span>
          <span class="unselected tab-others" @click="showOthers()">Others</span>
        </div>
      </div>
      <div class="summary">
        <div id="details">
          <h3>Plot</h3>
          <small>{{ movieDetail.Plot }}</small>
          <h3>Release</h3>
          <small>{{ movieDetail.Released }}</small>
          <h3>Actors</h3>
          <small>{{ movieDetail.Actors }}</small>
          <h3>Director</h3>
          <small>{{ movieDetail.Director }}</small>
          <h3>Writer</h3>
          <small>{{ movieDetail.Writer }}</small>
          <h3>Language</h3>
          <small>{{ movieDetail.Language }}</small>
          <h3>Country</h3>
          <small>{{ movieDetail.Country }}</small>
          <h3>Awards</h3>
          <small>{{ movieDetail.Awards }}</small>
        </div>

        <div id="ratings">
          <div v-for="rating in movieDetail.Ratings" :rating="rating" :key="rating.Source">
            <h3>{{ rating.Source }}</h3>
            <small>{{ rating.Value }}</small>
          </div>
        </div>

        <div id="others">
          <h3>Metascore</h3>
          <small>{{ movieDetail.Metascore }}</small>
          <h3>imdbRating</h3>
          <small>{{ movieDetail.imdbRating }}</small>
          <h3>imdbVotes</h3>
          <small>{{ movieDetail.imdbVotes }}</small>
          <h3>imdbID</h3>
          <small>{{ movieDetail.imdbID }}</small>
          <h3>Type</h3>
          <small>{{ movieDetail.Type }}</small>
          <h3>DVD</h3>
          <small>{{ movieDetail.DVD }}</small>
          <h3>BoxOffice</h3>
          <small>{{ movieDetail.BoxOffice }}</small>
          <h3>Production</h3>
          <small>{{ movieDetail.Production }}</small>
          <h3>Website</h3>
          <small>{{ movieDetail.Website }}</small>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
</template>

<script>
import Loader from '../../layout/Loader.vue';
export default {
  components: {
    Loader,
  },
  computed: {
    movieDetail() {
      return this.$store.getters.movieDetail;
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
  created() {
    this.$store.dispatch('getMovie', this.$route.params.movieId);
  },
  setup() {
    const showDetails = () => {
      document.getElementById('details').style.display = '';
      document.getElementById('ratings').style.display = 'none';
      document.getElementById('others').style.display = 'none';
      document.querySelector('.tab-details').className = 'selected tab-details';
      document.querySelector('.tab-ratings').className = 'unselected tab-ratings';
      document.querySelector('.tab-others').className = 'unselected tab-others';
    };

    const showRatings = () => {
      document.getElementById('details').style.display = 'none';
      document.getElementById('ratings').style.display = 'block';
      document.getElementById('others').style.display = 'none';
      document.querySelector('.tab-ratings').className = 'selected tab-ratings';
      document.querySelector('.tab-details').className = 'unselected tab-details';
      document.querySelector('.tab-others').className = 'unselected tab-others';
    };

    const showOthers = () => {
      document.getElementById('details').style.display = 'none';
      document.getElementById('ratings').style.display = 'none';
      document.getElementById('others').style.display = 'block';
      document.querySelector('.tab-others').className = 'selected tab-others';
      document.querySelector('.tab-details').className = 'unselected tab-details';
      document.querySelector('.tab-ratings').className = 'unselected tab-ratings';
    };

    return {
      showDetails,
      showRatings,
      showOthers,
    };
  },
};
</script>

<style scoped>
/* movie detail page */

#ratings {
  display: none;
}

#others {
  display: none;
}

h3 {
  font-weight: 600;
  font-size: 24px;
  line-height: 18px;
  color: #ffffff;
}

.movie-detail-container {
  height: 262px;
}

.movie-detail-container .items {
  display: flex;
  justify-content: space-between;
  padding: 0px 14px 0px 14px;
}

.movie-detail-container .items img {
  cursor: pointer;
  border-radius: 50%;
  padding: 5px;
  background: #d9251dcc;
}

.movie-detail-container .items .next-button-image {
  margin-top: 50px;
}

.movie-detail-container .items .back-button-image {
  margin-top: 50px;
  width: 16px;
}

.movie-detail-container .play-image {
  background-color: #d9251dcc;
  border-radius: 50%;
  padding: 7px;
  margin-top: 50px;
  width: 55px;
}

.movie-detail-item {
  margin: 0px auto;
  justify-content: center;
  display: flex;
  margin-top: -120px;
}

.movie-detail-item ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

.movie-detail-item ul li {
  padding: 0px;
  padding-bottom: 20px;
  margin: auto;
  justify-content: center;
  display: flex;
}

.movie-detail-item h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  padding: 0px;
  margin: 0px 8px;
  text-align: center;
}

.movie-detail-item h4 {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  color: #ffffff;
  opacity: 0.55;
  padding: 0px;
  margin: 0px;
}

.movie-detail-item .movie-image {
  margin: auto;
  justify-content: center;
  display: flex;
  width: 170px;
  height: 250px;
}

.movie-detail-item-info {
  margin: 0px 18px;
}

.movie-detail-item-info .movie-details {
  border: 1px solid #313d4d;
  box-sizing: border-box;
  border-radius: 18px;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  padding: 0px 3px 3px 3px;
}

.movie-detail-item-info .movie-details .item {
  display: flex;
  justify-content: space-between;
  padding-top: 3px;
}

.movie-detail-item-info .movie-details .item .selected {
  background: #d9251d;
  border-radius: 18px;
  padding: 6px 20px;
  cursor: pointer;
}

.movie-detail-item-info .movie-details .item .unselected {
  opacity: 0.5;
  cursor: pointer;
  border-radius: 18px;
  padding: 6px 20px;
}

.movie-detail-item-info .summary {
  margin-top: 35px;
}

.movie-detail-item-info .summary h3 {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: #ffffff;
}

.movie-detail-item-info .summary a {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-decoration: none;
  color: #47cfff;
}

.movie-detail-item-info .summary small {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  opacity: 0.7;
}
</style>
