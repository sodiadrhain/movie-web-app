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
    pages: 1,
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
    pages: (state) => {
      return state.pages;
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
    SET_PAGES(state, pages) {
      state.pages = pages;
    },
  },
  actions: {
    setLoading({ commit }) {
      commit('SET_LOADING', true);
    },
    removeLoading({ commit }) {
      commit('REMOVE_LOADING', false);
    },
    // api call load movies on page loaded
    // setLoading and removeLoading knows when to display loader during api call
    async loadMovies({ commit, dispatch }) {
      dispatch('setLoading');
      //   generate a random number from 1 to 10, to diplay list of recommendantions by page number
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      try {
        const response = await axios.get(`${API_URL}&s=boy&page=${randomNumber}`);
        commit('GET_MOVIES', response.data.Search);
        dispatch('removeLoading');
      } catch (error) {
        console.log(error);
      }
    },
    // api call to search movies
    async searchMovies({ commit, dispatch }, payload) {
      dispatch('setLoading');
      commit('SEARCH_ITEM', payload.searchText);
      // reset back to default values on new search
      commit('SET_ERR_MSG', null);
      //   commit('SET_PAGES', null);
      //   check if page number is sent
      const pageNumber = payload && payload.pageNumber ? payload.pageNumber : 1;
      try {
        const response = await axios.get(`${API_URL}&s=${payload.searchText}&page=${pageNumber}`);
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
    // api call to get a sigle movie and it relative details
    async getMovie({ commit, dispatch }, payload) {
      dispatch('setLoading');
      try {
        const response = await axios.get(`${API_URL}&i=${payload}`);
        if (response.data.Response === 'False') {
          commit('SET_ERR_MSG', response.data.Error);
        } else {
          commit('GET_A_MOVIE', response.data);
        }
        dispatch('removeLoading');
      } catch (error) {
        console.log(error);
      }
    },
    setPages({ commit, dispatch }, { pageNumber, searchText }) {
      commit('SET_PAGES', pageNumber);
      dispatch('searchMovies', {
        searchText: searchText,
        pageNumber: pageNumber,
      });
    },
  },
});
