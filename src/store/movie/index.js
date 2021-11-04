// const API_KEY = process.env.api_key;

const state = {
  movies: [],
  movieDetail: {},
  loading: false,
};

const getters = {
  getMovies() {
    return state.movies;
  },

  getMovieDetail() {
    return state.movieDetail;
  },

  getLoading() {
    return state.loading;
  },
};

export default {
  state,
  getters,
};
