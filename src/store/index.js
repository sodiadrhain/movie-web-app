import { createStore } from 'vuex';
import axios from 'axios';

const API_KEY = '6df998a4';
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export default createStore({
  state: {
    movies: [],
    movieDetail: {},
    loading: false,
    searchItem: null,
    errMsg: null,
  },
  getters: {
    movies: (state) => {
      return state.movies;
    },
    movieDetail: (state) => {
      return state.movieDetail;
    },
    loading: (state) => {
      return state.loading;
    },
    searchItem: (state) => {
      return state.searchItem;
    },
    errMsg: (state) => {
      return state.errMsg;
    },
  },
  mutations: {
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    REMOVE_LOADING(state, loading) {
      state.loading = loading;
    },
    GET_MOVIES(state, movies) {
      state.movies = movies;
    },
    GET_A_MOVIE(state, movieDetail) {
      state.movieDetail = movieDetail;
    },
    SEARCH_MOVIES(state, movies) {
      state.movies = movies;
    },
    SEARCH_ITEM(state, searchItem) {
      state.searchItem = searchItem;
    },
    SET_ERR_MSG(state, errMsg) {
      state.errMsg = errMsg;
    },
  },
  actions: {
    setLoading({ commit }) {
      commit('SET_LOADING', true);
    },
    removeLoading({ commit }) {
      commit('REMOVE_LOADING', false);
    },
    async loadMovies({ commit, dispatch }) {
      dispatch('setLoading');
      try {
        const response = await axios.get(`${API_URL}&s=home&page=1`);
        commit('GET_MOVIES', response.data.Search);
        dispatch('removeLoading');
      } catch (error) {
        console.log(error);
      }
    },
    async searchMovies({ commit, dispatch }, payload) {
      dispatch('setLoading');
      commit('SEARCH_ITEM', payload);
      commit('SET_ERR_MSG', null);
      try {
        const response = await axios.get(`${API_URL}&s=${payload}&page=1`);
        if (response.data.Response === 'False') {
          commit('SET_ERR_MSG', response.data.Error);
        } else {
          commit('GET_MOVIES', response.data.Search);
        }
        console.log(response.data);
        dispatch('removeLoading');
      } catch (error) {
        console.log(error);
      }
    },
    async getMovie({ commit, dispatch }, payload) {
      dispatch('setLoading');
      try {
        const response = await axios.get(`${API_URL}&i=${payload}`);
        commit('GET_A_MOVIE', response.data);
        dispatch('removeLoading');
      } catch (error) {
        console.log(error);
      }
    },
  },
});
