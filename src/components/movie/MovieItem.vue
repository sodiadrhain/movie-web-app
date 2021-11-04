<template>
  <div class="movie-detail-container">
    <div class="items">
      <img src="../../assets/images/arrow.svg" alt="iii" srcset="" />
      <img src="../../assets/images/play-detail.svg" alt="iii" class="play-image" />
      <img src="../../assets/images/respond-arrow.svg" alt="iii" srcset="" />
    </div>
  </div>
  <div class="movie-detail-item">
    <ul>
      <li>
        <img src="../../assets/images/image.jpg" alt="jjj" class="movie-image" />
      </li>
      <li><h3>John Wick 3: Parabellum</h3></li>
      <li><h4>2hr 10m | R</h4></li>
      <li><h4>Action, Crime, Thriller</h4></li>
      <li>
        <img src="../../assets/images/rating.png" alt="imageb" class="rating-img" />
      </li>
    </ul>
  </div>
  <div class="movie-detail-item-info">
    <div class="movie-details">
      <div class="item">
        <span class="selected">Details</span>
        <span class="unselected">Reviews</span>
        <span class="unselected">Others</span>
      </div>
    </div>
    <div class="summary">
      <h3>Synopsis</h3>
      <small
        >In this third installment of the adrenaline-fueled action franchise, super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting...
        <a href="#">Show More</a></small
      >
      <h3>Release</h3>
      <small>2014</small>
      <h3>Ratings</h3>
      <small>4012 / 5000</small>
    </div>
  </div>
  <br />
  <br />
</template>

<style scoped>
/* movie detail page */

h3 {
  font-weight: 600;
  font-size: 24px;
  line-height: 18px;
  color: #ffffff;
}

.movie-detail-container {
  background: linear-gradient(rgb(0 0 0 / 9%) 100%, rgb(0 0 0 / 48%) 100%), url('../../assets/images/image.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 262px;
}

.movie-detail-container .items {
  display: flex;
  justify-content: space-between;
  padding: 0px 14px 0px 14px;
}

.movie-detail-container .play-image {
  background-color: #ffffff42;
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
  line-height: 18px;
  padding: 0px;
  margin: 0px;
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

.movie-detail-item img .movie-image {
  margin: auto;
  justify-content: center;
  display: flex;
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
  padding: 0px 45px 3px 3px;
}

.movie-detail-item-info .movie-details .item {
  display: flex;
  justify-content: space-between;
  padding-top: 3px;
}

.movie-detail-item-info .movie-details .item .selected {
  background: #d9251d;
  border-radius: 18px;
  padding: 6px 35px;
}

.movie-detail-item-info .movie-details .item .unselected {
  padding: 6px 0px;
  opacity: 0.5;
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
