<template>
  <div class="movie-page">
    <div class="item">
      <span v-if="pages > 1" class="unselected tab-details" @click="prevPage()">Previous</span>
      <span class="selected" @click="nextPage()">Next</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions({
      addPage: 'setPages',
    }),
    nextPage() {
      this.addPage({ pageNumber: this.$store.getters.pages + 1, searchText: this.$store.getters.searchItem });
    },
    prevPage() {
      this.addPage({ pageNumber: this.$store.getters.pages - 1, searchText: this.$store.getters.searchItem });
    },
  },

  computed: {
    pages() {
      return this.$store.getters.pages;
    },
  },
};
</script>

<style scoped>
.movie-page .item {
  display: flex;
  justify-content: center;
  padding-top: 3px;
  color: #ffffff;
  margin: 30px 0px;
}

.movie-page .item .selected {
  background: #d9251d;
  border-radius: 18px;
  padding: 6px 20px;
  cursor: pointer;
  margin-left: 30px;
}

.movie-page .item .unselected {
  opacity: 0.7;
  cursor: pointer;
  border-radius: 18px;
  padding: 6px 20px;
  margin-right: 30px;
}
</style>
