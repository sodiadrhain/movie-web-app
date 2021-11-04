<template>
  <main>
    <NavBar />
    <div class="home-nav-container">
      <div class="home-nav-right">
        <img src="../assets/images/play.svg" alt="play" class="img-play" />
        <h3>Now Showing</h3>
      </div>
      <div class="home-nav-left">
        <h3>Coming Soon</h3>
      </div>
    </div>
    <!-- <Movie /> -->
    <div class="movie-container">
      <div class="movie-item-container">
        <ul>
          <li>
            <img src="../assets/images/image.jpg" alt="image" class="movie-img" />
          </li>
          <li>
            <img src="../assets/images/rating.png" alt="imageb" class="rating-img" />
          </li>
          <li>
            <h3><router-link to="/movie">John Wick 3</router-link></h3>
          </li>
          <li>
            <h4>Crime &dot; 2hr 10m | R</h4>
          </li>
        </ul>
      </div>

      <div class="movie-item-container">
        <ul>
          <li>
            <img src="../assets/images/imageg.png" alt="image" class="movie-img" />
          </li>
          <li>
            <img src="../assets/images/rating.png" alt="imageb" class="rating-img" />
          </li>
          <li>
            <h3>John Wick 3</h3>
          </li>
          <li>
            <h4>Crime &dot; 2hr 10m | R</h4>
          </li>
        </ul>
      </div>

      <div class="movie-item-container">
        <ul>
          <li>
            <img src="../assets/images/image.jpg" alt="image" class="movie-img" />
          </li>
          <li>
            <img src="../assets/images/rating.png" alt="imageb" class="rating-img" />
          </li>
          <li>
            <h3>John Wick 3</h3>
          </li>
          <li>
            <h4>Crime &dot; 2hr 10m | R</h4>
          </li>
        </ul>
      </div>

      <div class="movie-item-container">
        <ul>
          <li>
            <img src="../assets/images/imageg.png" alt="image" class="movie-img" />
          </li>
          <li>
            <img src="../assets/images/rating.png" alt="imageb" class="rating-img" />
          </li>
          <li>
            <h3>John Wick 3</h3>
          </li>
          <li>
            <h4>Crime &dot; 2hr 10m | R</h4>
          </li>
        </ul>
      </div>

      <div class="movie-item-container">
        <ul>
          <li>
            <img src="../assets/images/image.jpg" alt="image" class="movie-img" />
          </li>
          <li>
            <img src="../assets/images/rating.png" alt="imageb" class="rating-img" />
          </li>
          <li>
            <h3>John Wick 3</h3>
          </li>
          <li>
            <h4>Crime &dot; 2hr 10m | R</h4>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
// import Movie from '../components/movie/Movie.vue';
// export default {
//   components: {
//     Movie,
//   },
// };
//
import NavBar from '../layout/NavBar.vue';
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
main {
  margin-top: 45px;
  padding: 0px 16px;
}

.home-nav {
  border: 1px solid #2c3f5b;
  box-sizing: border-box;
  border-radius: 20px;
}

.home-nav-right {
  background: #d9251d;
  border-radius: 16px;
  display: flex;
  padding: 1px 30px 1px 18px;
}

.home-nav-container {
  display: flex;
  justify-content: space-between;
  border: 1px solid #2c3f5b;
  box-sizing: border-box;
  border-radius: 20px;
  margin-top: 28px;
  margin-bottom: 24px;
  padding: 4px 42px 4px 4px;
  flex-wrap: wrap;
}

h3 {
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
}

.home-nav-left {
  opacity: 0.5;
}

.img-play {
  margin-right: 7px;
}

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
}

.movie-item-container h4 {
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
  opacity: 0.5;
  padding: 0px;
  margin: 0px;
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
}

.movie-item-container .rating-img {
  width: 80px;
}

.movie-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
